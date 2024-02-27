import { ProductSchema } from '../models/Product.js';
import { UsersSchema } from '../models/User.js';
import mongoose from 'mongoose';
import {
  COD_RESPONSE_HTTP_OK,
  COD_RESPONSE_HTTP_ERROR,
  COD_RESPONSE_HTTP_BAD_REQUEST,
  COD_RESPONSE_HTTP_NOT_FOUND,
  COD_RESPONSE_HTTP_FORBIDDEN,
} from '../config/utilities.js';

const Product = mongoose.model('product', ProductSchema);
const User = mongoose.model('users', UsersSchema);

async function createProduct(req, res) {
  try {
    const {
      description,
      originData,
      destinationData,
      packageData,
      ownerId,
      price,
    } = req.body;

    if (isNaN(price) || price <= 0) {
      return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
        status: COD_RESPONSE_HTTP_BAD_REQUEST,
        message: 'The price must be a positive number',
      });
    }

    const existingUser = await User.findOne({ _id: ownerId });
    if (existingUser) {
      if (
        !isNaN(packageData.weightKg) &&
        !isNaN(packageData.heightCm) &&
        !isNaN(packageData.widthCm) &&
        !isNaN(packageData.lengthCm) &&
        packageData.weightKg > 0 &&
        packageData.heightCm > 0 &&
        packageData.widthCm > 0 &&
        packageData.lengthCm > 0
      ) {
        const product = new Product({
          description: description,
          originData: originData,
          destinationData: destinationData,
          packageData: {
            weightKg: packageData.weightKg,
            heightCm: packageData.heightCm,
            widthCm: packageData.widthCm,
            lengthCm: packageData.lengthCm,
          },
          ownerId: ownerId,
          price: price,
        });
        await product.save();
        res.status(COD_RESPONSE_HTTP_OK).json({
          status: COD_RESPONSE_HTTP_OK,
          message: 'The product has been stored correctly',
        });
      } else {
        return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
          status: COD_RESPONSE_HTTP_BAD_REQUEST,
          message: 'The packageData must be numbers and positive',
        });
      }
    } else {
      return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
        status: COD_RESPONSE_HTTP_BAD_REQUEST,
        message: 'This user does not exist',
      });
    }
  } catch (error) {
    return res.status(COD_RESPONSE_HTTP_ERROR).json({
      status: COD_RESPONSE_HTTP_ERROR,
      message: 'Error creating product',
    });
  }
}

async function getProductById(req, res) {
  try {
    const { productId } = req.body;
    const product = await Product.findById(productId).populate({
      path: 'ownerId',
      select: '_id name lastName',
    });
    return res.status(COD_RESPONSE_HTTP_OK).json({
      status: COD_RESPONSE_HTTP_OK,
      message: 'The product has been found',
      product: product,
    });
  } catch (error) {
    return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
      status: COD_RESPONSE_HTTP_BAD_REQUEST,
      message: 'Error finding this product',
    });
  }
}

async function findClientProducts(req, res) {
  try {
    const { ownerId } = req.body;
    const products = new Product.find({ ownerId: ownerId });

    return res.status(COD_RESPONSE_HTTP_OK).json({
      status: COD_RESPONSE_HTTP_OK,
      message: 'The products has been found',
      product: products,
    });
  } catch (error) {
    return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
      status: COD_RESPONSE_HTTP_BAD_REQUEST,
      message: 'Error finding products of this client',
    });
  }
}

async function updateProduct(req, res) {
  try {
    const { description, originData, destinationData, packageData, productId } =
      req.body;

    await Product.updateOne(
      { _id: productId },
      {
        description: description,
        originData: originData,
        destinationData: destinationData,
        packageData: packageData,
      },
    );
    return res.status(COD_RESPONSE_HTTP_OK).json({
      status: COD_RESPONSE_HTTP_OK,
      message: 'The products has been updated',
    });
  } catch (error) {
    return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
      status: COD_RESPONSE_HTTP_BAD_REQUEST,
      message: 'Error to update this product',
    });
  }
}

async function sendProduct(req, res) {
  try {
    if (req.user.role !== 'userBase') {
      return res
        .status(COD_RESPONSE_HTTP_FORBIDDEN)
        .send({ message: 'Access forbidden. Insufficient privileges.' });
    }

    const { status, productId } = req.body;
    if (status !== 'In Warehouse') {
      return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
        status: COD_RESPONSE_HTTP_BAD_REQUEST,
        message:
          'Invalid status value. Only "In Warehouse" status can be set using sendProduct.',
      });
    }

    const existingProduct = await Product.findById(productId);
    if (!existingProduct) {
      return res.status(COD_RESPONSE_HTTP_NOT_FOUND).json({
        status: COD_RESPONSE_HTTP_NOT_FOUND,
        message: 'Product not found',
      });
    }

    if (existingProduct.sentAt) {
      return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
        status: COD_RESPONSE_HTTP_BAD_REQUEST,
        message:
          'The product has already been sent and sentAt date is already set.',
      });
    }
    const sentAt = existingProduct.sentAt || new Date();
    sentAt.setHours(sentAt.getHours() - 3);

    existingProduct.status = status;
    existingProduct.sentAt = sentAt;
    await existingProduct.save();

    return res.status(COD_RESPONSE_HTTP_OK).json({
      status: COD_RESPONSE_HTTP_OK,
      message: 'The product has been sent',
    });
  } catch (error) {
    if (error.name === 'ValidationError' && error.errors['status']) {
      return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
        status: COD_RESPONSE_HTTP_BAD_REQUEST,
        message: 'Invalid status value. Must be one of: In Warehouse',
      });
    }
    return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
      status: COD_RESPONSE_HTTP_BAD_REQUEST,
      message: 'Error sending this product',
    });
  }
}

async function receiveProduct(req, res) {
  try {
    const { user, body } = req;
    const { role } = user;
    const { status, productId } = body;

    if (role !== 'userBase') {
      return res
        .status(COD_RESPONSE_HTTP_FORBIDDEN)
        .json({ message: 'Access forbidden. Insufficient privileges.' });
    }

    const existingProduct = await Product.findById(productId);
    if (!existingProduct) {
      return res
        .status(COD_RESPONSE_HTTP_NOT_FOUND)
        .json({ message: 'Product not found' });
    }

    if (!existingProduct.sentAt) {
      return res
        .status(COD_RESPONSE_HTTP_BAD_REQUEST)
        .json({ message: 'The product has not been sent yet.' });
    }

    const validStatuses = [
      'Canceled',
      'In Progress',
      'In Transit',
      'Delivered',
    ];
    if (!validStatuses.includes(status)) {
      return res
        .status(COD_RESPONSE_HTTP_BAD_REQUEST)
        .json({ message: 'Invalid status' });
    }

    if (existingProduct.status === status) {
      return res
        .status(COD_RESPONSE_HTTP_BAD_REQUEST)
        .json({ message: `Product is already ${status}.` });
    }

    const invalidTransitions = {
      Canceled: ['Canceled'],
      'In Progress': ['In Progress'],
      'In Transit': ['In Transit', 'In Progress', 'Canceled'],
      Delivered: ['Delivered', 'In Transit', 'In Progress', 'Canceled'],
    };

    if (
      invalidTransitions[existingProduct.status] &&
      invalidTransitions[existingProduct.status].includes(status)
    ) {
      return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
        message: `Product cannot transition from ${existingProduct.status} to ${status}.`,
      });
    }

    const receivedAt = new Date();
    receivedAt.setHours(receivedAt.getHours() - 3);
    existingProduct.status = status;
    existingProduct.receivedAt = receivedAt;
    await existingProduct.save();

    let successMessage = '';
    switch (status) {
      case 'Canceled':
        successMessage = 'The product has been successfully canceled.';
        break;
      case 'In Progress':
        successMessage = 'The product is in progress.';
        break;
      case 'In Transit':
        successMessage = 'The product is in transit.';
        break;
      case 'Delivered':
        successMessage = 'The product has been delivered.';
        break;
      default:
        successMessage = 'The product has been received.';
    }

    return res.status(COD_RESPONSE_HTTP_OK).json({
      status: COD_RESPONSE_HTTP_OK,
      message: successMessage,
    });
  } catch (error) {
    return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
      status: COD_RESPONSE_HTTP_BAD_REQUEST,
      message: 'Error receiving this product',
    });
  }
}

export {
  createProduct,
  getProductById,
  updateProduct,
  findClientProducts,
  sendProduct,
  receiveProduct,
};

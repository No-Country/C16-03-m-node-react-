import { ProductSchema } from '../models/Product.js';
import { UsersSchema } from '../models/Users.js';
import mongoose from 'mongoose';
import {
  COD_RESPONSE_HTTP_OK,
  COD_RESPONSE_HTTP_ERROR,
  COD_RESPONSE_HTTP_BAD_REQUEST,
} from '../config/utilities.js';

const Product = mongoose.model('product', ProductSchema);
mongoose.model('users', UsersSchema);

async function createProduct(req, res) {
  try {
    const { description, originData, destinationData, packageData, ownerId } =
      req.body;

    if (ownerId) {
      if (
        !isNaN(packageData.weightKg) &&
        !isNaN(packageData.heightCm) &&
        !isNaN(packageData.widthCm) &&
        !isNaN(packageData.lengthCm)
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
        });
        await product.save();
        res.status(COD_RESPONSE_HTTP_OK).json({
          status: COD_RESPONSE_HTTP_OK,
          message: 'The product has been stored correctly',
        });
      } else {
        return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
          status: COD_RESPONSE_HTTP_BAD_REQUEST,
          message: 'The packageData is not a number',
        });
      }
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
    return res.status(200).json({
      status: 200,
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

    return res.status(200).json({
      status: 200,
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
    return res.status(200).json({
      status: 200,
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
    const { status, sentAt, productId } = req.body;

    await Product.updateOne(
      { _id: productId },
      {
        status: status,
        sentAt: sentAt,
      },
    );
    return res.status(200).json({
      status: 200,
      message: 'The products has been sent',
    });
  } catch (error) {
    return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
      status: COD_RESPONSE_HTTP_BAD_REQUEST,
      message: 'Error to send this product',
    });
  }
}

async function receiveProduct(req, res) {
  try {
    const { status, receivedAt, productId } = req.body;

    await Product.updateOne(
      { _id: productId },
      {
        status: status,
        receivedAt: receivedAt,
      },
    );
    return res.status(200).json({
      status: 200,
      message: 'The products has been received',
    });
  } catch (error) {
    return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
      status: COD_RESPONSE_HTTP_BAD_REQUEST,
      message: 'Error to received this product',
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

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
    const { description, originData, destinationData, packageData, price } =
      req.body;

    const ownerId = req.user._id;

    if (isNaN(price) || price <= 0) {
      return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
        status: COD_RESPONSE_HTTP_BAD_REQUEST,
        message: 'El precio debe ser un número positivo',
      });
    }

    const existingUser = await User.findOne({ _id: ownerId });
    if (existingUser) {
      if (description == 'Package') {
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
          const savedProduct = await product.save();
          res.status(COD_RESPONSE_HTTP_OK).json({
            status: COD_RESPONSE_HTTP_OK,
            message: 'El producto ha sido creado correctamente',
            productId: savedProduct._id
          });
        } else {
          return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
            status: COD_RESPONSE_HTTP_BAD_REQUEST,
            message: 'Los datos del paquete deben ser números y positivos',
          });
        }
      } else if (description == 'Letter') {
        const product = new Product({
          description: description,
          originData: originData,
          destinationData: destinationData,
          ownerId: ownerId,
          price: price,
        });
        const savedProduct = await product.save();
        res.status(COD_RESPONSE_HTTP_OK).json({
          status: COD_RESPONSE_HTTP_OK,
          message: 'El producto ha sido creado correctamente',
          productId: savedProduct._id
        });
      } else {
        res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
          status: COD_RESPONSE_HTTP_BAD_REQUEST,
          message: 'Tipo de envío no válido', //seria descripcion para el back 
        });
      }
    } else {
      return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
        status: COD_RESPONSE_HTTP_BAD_REQUEST,
        message: 'Este usuario no existe',
      });
    }
  } catch (error) {
    return res.status(COD_RESPONSE_HTTP_ERROR).json({
      status: COD_RESPONSE_HTTP_ERROR,
      message: 'Error al crear el producto',
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
      message: 'El producto ha sido encontrado',
      product: product,
    });
  } catch (error) {
    return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
      status: COD_RESPONSE_HTTP_BAD_REQUEST,
      message: 'Error al encontrar este producto',
    });
  }
}

async function deleteProduct(req, res) {
  try {
    const { productId } = req.body;
    await Product.findOneAndDelete({ _id: productId });
    return res.status(COD_RESPONSE_HTTP_OK).json({
      status: COD_RESPONSE_HTTP_OK,
      message: 'El producto ha sido eliminado',
    });
  } catch (error) {
    return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
      status: COD_RESPONSE_HTTP_BAD_REQUEST,
      message: 'Error al eliminar este producto',
    });
  }
}

async function getAllProducts(req, res) {
  try {
    const products = await Product.find({});
    return res.status(COD_RESPONSE_HTTP_OK).json({
      status: COD_RESPONSE_HTTP_OK,
      products: products,
    });
  } catch (error) {
    return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
      status: COD_RESPONSE_HTTP_BAD_REQUEST,
      message: 'Error al obtener los productos',
    });
  }
}

async function findClientProducts(req, res) {
  try {
    const ownerId = req.user._id;
    const products = await Product.find({ ownerId: ownerId }).exec();

    return res.status(COD_RESPONSE_HTTP_OK).json({
      status: COD_RESPONSE_HTTP_OK,
      message: 'Los productos han sido encontrados',
      products: products, 
    });
  } catch (error) {
    return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
      status: COD_RESPONSE_HTTP_BAD_REQUEST,
      message: 'Error al encontrar los productos de este cliente',
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
      message: 'Los productos han sido actualizados',
    });
  } catch (error) {
    return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
      status: COD_RESPONSE_HTTP_BAD_REQUEST,
      message: 'Error al actualizar este producto',
    });
  }
}

async function sendProduct(req, res) {
  try {
    if (req.user.role !== 'userBase') {
      return res
        .status(COD_RESPONSE_HTTP_FORBIDDEN)
        .send({ message: 'Acceso denegado. Privilegios insuficientes' });
    }

    const { status, productId } = req.body;
    if (status !== 'In Warehouse') {
      return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
        status: COD_RESPONSE_HTTP_BAD_REQUEST,
        message:
          'Estado no válido. Solo se puede establecer el estado "En Almacén" utilizando "Recibir despacho"',
      });
    }

    const existingProduct = await Product.findById(productId);
    if (!existingProduct) {
      return res.status(COD_RESPONSE_HTTP_NOT_FOUND).json({
        status: COD_RESPONSE_HTTP_NOT_FOUND,
        message: 'Producto no encontrado',
      });
    }

    if (existingProduct.sentAt) {
      return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
        status: COD_RESPONSE_HTTP_BAD_REQUEST,
        message:
          'El producto ya ha sido enviado y la fecha de envío ya está establecida',
      });
    }
    const sentAt = existingProduct.sentAt || new Date();
    sentAt.setHours(sentAt.getHours() - 3);

    existingProduct.status = status;
    existingProduct.sentAt = sentAt;
    await existingProduct.save();

    return res.status(COD_RESPONSE_HTTP_OK).json({
      status: COD_RESPONSE_HTTP_OK,
      message: 'El producto ha sido enviado.',
    });
  } catch (error) {
    if (error.name === 'ValidationError' && error.errors['status']) {
      return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
        status: COD_RESPONSE_HTTP_BAD_REQUEST,
        message: 'Estado no válido. El estado debe ser: "En Almacén"',
      });
    }
    return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
      status: COD_RESPONSE_HTTP_BAD_REQUEST,
      message: 'Error al enviar este producto',
    });
  }
}


    // Diccionario de traducción de estados
    const stateTranslations = {
      'Canceled': 'Cancelado',
      'In Progress': 'En progreso',
      'In Transit': 'En tránsito',
      'Delivered': 'Entregado'
    };

async function receiveProduct(req, res) {
  try {
    const { user, body } = req;
    const { role } = user;
    const { status, productId } = body;

    if (role !== 'userBase') {
      return res
        .status(COD_RESPONSE_HTTP_FORBIDDEN)
        .json({ message: 'Acceso denegado. Privilegios insuficientes' });
    }

    const existingProduct = await Product.findById(productId);
    if (!existingProduct) {
      return res
        .status(COD_RESPONSE_HTTP_NOT_FOUND)
        .json({ message: 'Producto no encontrado' });
    }

    if (!existingProduct.sentAt) {
      return res
        .status(COD_RESPONSE_HTTP_BAD_REQUEST)
        .json({ message: 'El producto aún no ha sido enviado' });
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
        .json({ message: 'Estado no válido.' });
    }

  // Traducción del estado al español 
   const translatedStatus = stateTranslations[status];

    if (existingProduct.status === status) {
      return res
        .status(COD_RESPONSE_HTTP_BAD_REQUEST)
        // .json({ message: `El producto ya está ${status}.` });
        .json({ message: `El producto ya está ${translatedStatus}.` });
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
        // message: `No se puede cambiar el estado del producto de ${existingProduct.status} a ${status}.`,
        message: `No se puede cambiar el estado del producto de ${existingProduct.status} a ${translatedStatus}.`,
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
        successMessage = 'El producto ha sido cancelado con éxito';
        break;
      case 'In Progress':
        successMessage = 'El producto está en progreso';
        break;
      case 'In Transit':
        successMessage = 'El producto está en tránsito';
        break;
      case 'Delivered':
        successMessage = 'El producto ha sido entregado';
        break;
      default:
        successMessage = 'El producto ha sido recibido';
    }

    return res.status(COD_RESPONSE_HTTP_OK).json({
      status: COD_RESPONSE_HTTP_OK,
      message: successMessage,
    });
  } catch (error) {
    return res.status(COD_RESPONSE_HTTP_BAD_REQUEST).json({
      status: COD_RESPONSE_HTTP_BAD_REQUEST,
      message: 'Error al recibir este producto',
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
  deleteProduct,
  getAllProducts,
};

import mongoose from 'mongoose';
import { ProductSchema } from '../models/Product.js';
import { UsersSchema } from '../models/Users.js';

const Product = mongoose.model('Product', ProductSchema);
const Users = mongoose.model('Users', UsersSchema);

async function getProductById(req, res) {
  try {
    if (!req.body._id || !req.body._id.$oid) {
      return res
        .status(400)
        .json({ mensaje: 'ID not provided in the correct format.' });
    }
    const id = req.body._id.$oid;
    // if (req.user.role !== 'userBase') {
    //   return res.status(403).json({ mensaje: 'Access denied.' });
    // }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ mensaje: 'Product not found.' });
    }

    const owner = await Users.findById(product.ownerId);
    if (!owner) {
      return res.status(404).json({ mensaje: 'Owner not found.' });
    }

    // return res.status(200).json(product);
    return res.status(200).json({
      _id: product._id,
      description: product.description,
      originData: product.originData,
      destinationData: product.destinationData,
      packageData: product.packageData,
      status: product.status,
      owner: {
        name: owner.name,
        lastName: owner.lastName,
      },
      sentAt: product.sentAt || null,
      receivedAt: product.receivedAt || null,
      // __v: product.__v
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

export { getProductById };

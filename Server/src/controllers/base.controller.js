import mongoose from 'mongoose';
import { ProductSchema } from '../models/Product.js';
import { UsersSchema } from '../models/Users.js';

const Product = mongoose.model('Product', ProductSchema);
const Users = mongoose.model('Users', UsersSchema);

async function getProductById(req, res) {
  try {

    if (!req.body._id ) {
      return res.status(400).json({ mensaje: 'ID not provided in the correct format.' });
    }
    const id = req.body._id;
    // if (req.user.role !== 'userBase') {
    //   return res.status(403).json({ mensaje: 'Access denied.' });
    // }

    const product = await Product.findById(id)
    // .populate('ownerId');
    // const product = await Product.find({})
      .populate({
        path: 'ownerId',
        select: '_id name lastName'
      });

    if (!product) {
      return res.status(404).json({ mensaje: 'Product not found.' });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

export { getProductById };

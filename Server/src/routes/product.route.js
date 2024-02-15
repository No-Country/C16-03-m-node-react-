import express from 'express';
import {
  createProduct,
  getProductById,
  updateProduct,
  sendProduct,
  receiveProduct,
} from '../controllers/product.controller.js';

const router = express.Router();

router.post('/createProduct', createProduct);
router.get('/getOneProduct', getProductById);
router.put('/updateProduct', updateProduct);
router.put('/sendProduct', sendProduct);
router.put('/receiveProduct', receiveProduct);

export default router;

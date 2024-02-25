import express from 'express';
import {
  createProduct,
  getProductById,
  updateProduct,
  sendProduct,
  receiveProduct,
} from '../controllers/product.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
const router = express.Router();

router.post('/createProduct', authMiddleware, createProduct);
router.get('/getOneProduct',authMiddleware, getProductById);
router.put('/updateProduct', authMiddleware, updateProduct);
router.put('/sendProduct',authMiddleware, sendProduct);
router.put('/receiveProduct',authMiddleware, receiveProduct);

export default router;

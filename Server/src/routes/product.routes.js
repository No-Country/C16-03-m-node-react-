import express from 'express';
import {
  createProduct,
  getProductById,
  updateProduct,
  sendProduct,
  receiveProduct,
  getAllProducts,
  deleteProduct,
  findClientProducts,
} from '../controllers/product.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
const router = express.Router();

router.post('/createProduct', authMiddleware, createProduct);
router.get('/getAllProducts', authMiddleware, getAllProducts);
router.post('/findClientProducts', authMiddleware, findClientProducts );
router.delete('/deleteProduct', authMiddleware, deleteProduct );
router.post('/getOneProduct', getProductById);
router.put('/updateProduct', authMiddleware, updateProduct);
router.put('/sendProduct', authMiddleware, sendProduct);
router.put('/receiveProduct', authMiddleware, receiveProduct);

export default router;

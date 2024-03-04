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
router.get('/getAllProducts', getAllProducts, authMiddleware);
router.post('/findClientProducts', findClientProducts, authMiddleware);
router.delete('/deleteProduct', deleteProduct, authMiddleware);
router.post('/getOneProduct', getProductById);
router.put('/updateProduct', authMiddleware, updateProduct);
router.put('/sendProduct', authMiddleware, sendProduct);
router.put('/receiveProduct', authMiddleware, receiveProduct);

export default router;

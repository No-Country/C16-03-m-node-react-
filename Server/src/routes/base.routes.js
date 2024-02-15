import express from 'express';
import { getProductById } from '../controllers/base.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/find-products', authMiddleware, getProductById);

export default router;

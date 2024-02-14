import express from 'express';
import { getProductById } from '../controllers/base.controller.js';

const router = express.Router();

router.get('/find-products', getProductById);

export default router;

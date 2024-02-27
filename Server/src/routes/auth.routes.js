import express from 'express';
import {
  createUserWithUserRole,
  createUserWithBaseRole,
  login,
  deleteAccount,
} from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
const router = express.Router();

router.post('/signup', createUserWithUserRole);
router.post('/signupUserBase', authMiddleware, createUserWithBaseRole);
router.post('/signin', login);
router.delete('/deleteAccount/:id', authMiddleware, deleteAccount);
export default router;

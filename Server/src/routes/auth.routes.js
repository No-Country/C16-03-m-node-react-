import express from 'express';
import {createUserWithUserRole, createUserWithBaseRole, login} from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
const router = express.Router();

router.post('/signup', createUserWithUserRole);
router.post('/signupUserBase',authMiddleware, createUserWithBaseRole);
router.post('/signin', login);

export default router;

import express from 'express';
import {createUser, login} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', createUser);
router.post('/signin', login);

export default router;

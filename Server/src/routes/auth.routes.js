import express from 'express';
import {createUser, login} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/signup', login);

export default router;

import baseController from '../controllers/base.controller.js';
import baseMiddleware from '../middlewares/base.middleware.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { Router } from 'express';

const baseRoutes = Router();

baseRoutes.post(
  '/create',
  [authMiddleware, baseMiddleware.validateUser, baseMiddleware.validateData],
  baseController.create,
);
baseRoutes.put(
  '/edit/:id',
  [
    authMiddleware,
    baseMiddleware.validateUser,
    baseMiddleware.validateData,
    baseMiddleware.validateBaseId,
  ],
  baseController.edit,
);
baseRoutes.delete(
  '/delete/:id',
  [authMiddleware, baseMiddleware.validateUser, baseMiddleware.validateBaseId],
  baseController.delete,
);

export default baseRoutes;

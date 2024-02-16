import baseController from '../controllers/base.controller.js';
import baseMiddleware from '../middlewares/base.middleware.js';
import { Router } from 'express';

const baseRoutes = Router();

baseRoutes.post(
  '/create',
  [baseMiddleware.validateToken, baseMiddleware.validateData],
  baseController.create,
);
baseRoutes.put(
  '/edit/:id',
  [
    baseMiddleware.validateToken,
    baseMiddleware.validateData,
    baseMiddleware.validateBaseId,
  ],
  baseController.edit,
);
baseRoutes.delete(
  '/delete/:id',
  [baseMiddleware.validateToken, baseMiddleware.validateBaseId],
  baseController.delete,
);

export default baseRoutes;

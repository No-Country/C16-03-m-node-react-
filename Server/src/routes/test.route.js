import Router from 'express';
import { testController } from '../controllers/test.controller.js';
const routes = Router();

routes.get('/test', testController.test);

export default routes;

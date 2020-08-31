import { Router } from 'express';

import Controller from '../controllers/AuthController';
import authMiddeware from '../middlewares/authMiddeware';

const routes = Router();
const controllers = new Controller();

routes.post('/signup', controllers.signup);
routes.get('/login', controllers.login);
routes.get('/me', authMiddeware, controllers.me);

export default routes;

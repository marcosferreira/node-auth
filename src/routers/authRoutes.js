import { Router } from 'express';

import Controller from '../controllers/AuthController';

const routes = Router();
const controllers = new Controller();

routes.post('/signup', controllers.signup);
routes.post('/login', controllers.login);
routes.post('/forgot', controllers.forgotPassword);

export default routes;

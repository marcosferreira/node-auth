import { Router } from 'express';

import Controller from '../controllers/AuthController';

const routes = Router();
const controllers = new Controller();

routes.post('/signup', controllers.signup);
routes.get('/login', controllers.login);

export default routes;

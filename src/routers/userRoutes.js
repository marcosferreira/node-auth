import { Router } from 'express';

import Controller from '../controllers/UserController';
import authMiddleware from '../middlewares/authMiddeware';

const routes = Router();
const controllers = new Controller();

routes.get('/', authMiddleware, controllers.index);
routes.post('/', controllers.store);
routes.get('/', controllers.show);
routes.put('/', controllers.update);
routes.delete('/', controllers.exclude);

export default routes;

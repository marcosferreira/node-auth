import { Router } from 'express';

import Controller from '../controllers/UserController';

const routes = Router();
const controllers = new Controller();

routes.get('/', controllers.index);
routes.post('/', controllers.store);
routes.get('/', controllers.show);
routes.put('/', controllers.update);
routes.delete('/', controllers.exclude);

export default routes;

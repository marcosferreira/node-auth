import { Router } from 'express';

import userRoutes from './userRoutes';

const routers = Router();

routers.use('/users', userRoutes);

export default routers;

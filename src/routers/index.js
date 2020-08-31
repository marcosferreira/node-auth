import { Router } from 'express';

import authRoutes from './authRoutes';
import userRoutes from './userRoutes';

const routers = Router();

routers.use('/auth', authRoutes);
routers.use('/users', userRoutes);

export default routers;

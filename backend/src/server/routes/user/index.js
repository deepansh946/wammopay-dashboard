import { Router } from 'express';
import { getList } from './user';

const routes = Router();

routes.get('/allUsers', getList);

export default routes;

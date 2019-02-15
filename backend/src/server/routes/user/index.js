import { Router } from 'express';
import { insertUser } from './user';

const routes = Router();

routes.post('/', insertUser);

export default routes;

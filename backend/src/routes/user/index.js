import { Router } from 'express';
import { insertUser, signIn, getAll } from './user';

const routes = Router();

routes.post('/', insertUser);
routes.post('/sign-in', signIn);
routes.get('/', getAll);

export default routes;

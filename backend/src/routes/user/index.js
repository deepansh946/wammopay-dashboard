import { Router } from 'express';
import { insertUser, signIn, getAll, get } from './user';

const routes = Router();

routes.post('/', insertUser);
routes.post('/sign-in', signIn);
routes.get('/', getAll);
routes.get('/:id', get);

export default routes;

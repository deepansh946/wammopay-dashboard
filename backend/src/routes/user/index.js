import { Router } from 'express';
import { insertUser, signIn, getAll, get, getByUsername } from './user';

const routes = Router();

routes.post('/', insertUser);
routes.post('/sign-in', signIn);
routes.get('/', getAll);
routes.get('/:id', get);
routes.get('/username/:username', getByUsername);

export default routes;

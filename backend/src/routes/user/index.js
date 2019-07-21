import { Router } from 'express';
import {
  insertUser,
  signIn,
  getAll,
  get,
  getByUsername,
  saveToken
} from './user';

const routes = Router();

routes.post('/', insertUser);
routes.post('/sign-in', signIn);
routes.get('/', getAll);
routes.get('/:id', get);
routes.get('/username/:username', getByUsername);
routes.post('/save-token', saveToken);

export default routes;

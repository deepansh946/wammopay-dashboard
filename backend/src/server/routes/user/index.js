import { Router } from 'express';
import { insertUser, signIn } from './user';

const routes = Router();

routes.post('/', insertUser);
routes.post('/sign-in', signIn);

export default routes;

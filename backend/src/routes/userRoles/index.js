import { Router } from 'express';
import { insert, deleteUserRole, getAll } from './userRoles';

const routes = Router();

routes.post('/', insert);
routes.delete('/delete', deleteUserRole);
routes.get('/getAll/:parentId', getAll);

export default routes;

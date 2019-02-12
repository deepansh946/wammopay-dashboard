import express from 'express';
import { PORT } from '../config/index';
import DB from '../config/db';
import middleware from './middleware/index';
import routes from './modules/index';

const app = express();

middleware(app);

routes(app);

app.listen(PORT, error => {
  if (error) {
    console.error(error);
  }
  console.log(`Server is started at ${PORT}`);
});

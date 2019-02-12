import express from 'express';
import morgan from 'morgan';
import { isDEV, SESSION_SECRET } from '../config/index';
import helmet from 'helmet';
import compression from 'compression';

export default app => {
  //for the production
  if (!isDEV) {
    app.use(helmet());
    app.use(compression());
  }

  //body parser
  app.use(express.json());

  //log the http request
  app.use(morgan(isDEV ? 'dev' : 'common'));
};

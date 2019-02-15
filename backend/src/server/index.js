import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes/index';
import middleware from './middleware/index';

const app = express();

app.use(bodyParser.json());

// CORS Middleware
app.use((req, res, next) => {
  // Enabling CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization'
  );
  next();
});

const PORT = 3003;

middleware(app);

routes(app);

app.listen(PORT, error => {
  if (error) {
    console.error(error);
  }
  console.log(`Server is started at ${PORT}`);
});

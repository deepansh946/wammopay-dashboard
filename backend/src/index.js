import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes/index';
import middleware from './middleware/index';

import path from 'path';

var dotenv = require('dotenv').config({
  path: path.resolve(process.cwd(), '.env')
});

console.log(path.join(process.cwd(), 'src/build'));

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

// Before deploying uncomment the below lines
app.use(express.static(path.join(process.cwd(), 'build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

middleware(app);

routes(app);

app.listen(process.env.PORT || 3003, error => {
  if (error) {
    console.error(error);
  }
  console.log(`Server is running!`);
});

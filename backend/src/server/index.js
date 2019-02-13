import express from 'express';
import bodyParser from 'body-parser';
import middleware from './middleware/index';
import routes from './routes/index';

import React from 'react';
import { renderToString } from 'react-dom/server';
import JssProvider from 'react-jss/lib/JssProvider';
import { SheetsRegistry } from 'react-jss/lib/jss';

const app = express();

app.use(bodyParser.json());

//CORS Middleware
app.use(function(req, res, next) {
  //Enabling CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization'
  );
  next();
});

const PORT = 3001;

middleware(app);

routes(app);

app.use(express.static('public'));

app.use((req, res) => {
  const SheetRegistry = new SheetsRegistry();

  const generate = createGenerateClassName();

  const html = renderToString(
    <JssProvider registry={SheetRegistry} generateClassName={generate}>
      <App />
    </JssProvider>
  );

  const css = SheetRegistry.toString();

  res.send(`
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Wammo Pay Dashboard</title>
    <style id='jss-styles'>${css}</style>
  </head>
  <body>
    <div id="app">${html}</div>
    <script src="main.js" async></script>
    ${dev ? '<script src="/reload/reload.js" async></script>' : ''}
  </body>
  </html>
  `);
});

app.listen(PORT, error => {
  if (error) {
    console.error(error);
  }
  console.log(`Server is started at ${PORT}`);
});

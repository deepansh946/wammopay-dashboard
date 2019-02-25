import 'babel-polyfill';

const cluster = require('cluster');
const os = require('os');

const express = require('express');
const middleware = require('./middleware/index');
const routes = require('./routes/index');

const nofCPU = os.cpus().length;

// cluster is user to increase the effiency of the node
if (cluster.isMaster) {
  for (let i = 0; i < nofCPU; i += 1) {
    cluster.fork();
  }

  console.log(`Master is setting up with workers: ${nofCPU}`);

  cluster.on('online', worker => {
    console.log(`Worker is online :${worker}`);
  });

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Worker died :${worker.process.pid} and signal ${signal}`);
    console.log('Starting a new worker');
    cluster.fork();
  });
} else {
  // For every master/worker start a new express server
  //app is initialized
  const app = express();

  app.use(express.static(path.join(__dirname, 'frontend/build')));

  //all the middleware are added
  middleware(app);

  //all the routes are included here
  routes(app);

  //server is started
  app.listen(PORT, error => {
    if (error) {
      console.error(error);
    }
    console.log(`Server is started at ${PORT}`);
  });
}

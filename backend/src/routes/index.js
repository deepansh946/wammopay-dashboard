import UserRoutes from './user';
// import TweetRoutes from '../modules/tweets/routes';

export default app => {
  //all the routes
  app.use('/api/users', UserRoutes);
  //   app.use('/api/tweet', TweetRoutes);

  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  //not found routes
  app.use(function(req, res, next) {
    res.status(404).json({
      statusCode: 404,
      error: 'Route Does not found'
    });
  });
};

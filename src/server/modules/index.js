//This file contain the all the routes of the app

// import UserRoutes from '../modules/user/routes';
// import TweetRoutes from '../modules/tweets/routes';

export default app => {
  //all the routes
  //   app.use('/api/user', UserRoutes);
  //   app.use('/api/tweet', TweetRoutes);

  //not found routes
  app.use(function(req, res, next) {
    res.status(404).json({
      statusCode: 404,
      error: 'Route Does not found'
    });
  });
};

import UserRoutes from './user';
import TwilioRoutes from './twilio';

export default app => {
  //all the routes
  app.use('/api/users', UserRoutes);
  app.use('/api/twilio', TwilioRoutes);

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

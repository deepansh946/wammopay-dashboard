import UserRoutes from './user';
import TwilioRoutes from './twilio';
import UserRoleRoutes from './userRoles';
import PaymentRoutes from './payments';

export default app => {
  //all the routes
  app.use('/api/users', UserRoutes);
  app.use('/api/twilio', TwilioRoutes);
  app.use('/api/userRoles', UserRoleRoutes);
  app.use('/api/payments', PaymentRoutes);

  // app.get('/', (req, res) => {
  //   res.send('Hello World');
  // });

  //not found routes
  app.use(function(req, res, next) {
    res.status(404).json({
      statusCode: 404,
      error: 'Route Does not found'
    });
  });
};

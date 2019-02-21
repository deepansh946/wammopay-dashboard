import { Router } from 'express';
import path from 'path';

var dotenv = require('dotenv').config({
  path: path.resolve(process.cwd(), '.env')
});

const routes = Router();

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

routes.post('/verify', (req, res) => {
  res.header('Content-Type', 'application/json');

  const { phoneNumber, msgBody } = req.body;

  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
      body: msgBody
    })
    .then(() => {
      const response = {
        statusCode: 200,
        message: 'Success'
      };
      res.send(response);
    })
    .catch(err => {
      console.log(err);
      const errResponse = {
        statusCode: 500,
        error: 'Twilio API Error',
        err: err
      };
      res.send(errResponse);
    });
});

export default routes;

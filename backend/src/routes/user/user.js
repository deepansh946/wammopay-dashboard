import { executeSql } from '../../config/db';
import CryptoJS from 'crypto-js';
import path from 'path';

var dotenv = require('dotenv').config({
  path: path.resolve(process.cwd(), '.env')
});

export const insertUser = (req, res) => {
  const { email, fullName, mobileNumber, password } = req.body;
  const passwordHash = CryptoJS.MD5(
    password,
    process.env.ENCRYPTION_KEY
  ).toString();

  const query = `
  INSERT INTO users 
    (email, username, phoneNumber, passwordHash,
    emailConfirmed, twoFactorEnabled, phoneNumberConfirmed, 
    lockoutEnabled, accessFailedCount)
  VALUES
    (\'${email}\', \'${fullName}\', \'${mobileNumber}\', 
    \'${passwordHash}\', 0, 0, 0, 0, 0)
  `;

  executeSql(query)
    .then(response => {
      console.log(response);

      if (response.affectedRows > 0) {
        const obj = {
          statusCode: 200,
          message: 'Success'
        };
        res.send(obj);
      }
    })
    .catch(err => {
      var obj = {};
      if (err.errno === 1062) {
        obj = {
          statusCode: 501,
          message: 'Entry already exists',
          error: err
        };
      } else {
        obj = {
          statusCode: 500,
          message: 'Internal Server Error',
          error: err
        };
      }
      res.send(obj);
    });
};

export const signIn = (req, res) => {
  const { email, password } = req.body;
  const passwordHash = CryptoJS.MD5(
    password,
    process.env.ENCRYPTION_KEY
  ).toString();
  const query = `
    select * from users 
    where 
    email=\'${email}\' and passwordHash=\'${passwordHash}\';
  `;

  executeSql(query)
    .then(response => {
      var obj = {};
      if (response.length > 0) {
        const [user] = response;
        const { email, username, phoneNumber } = user;

        obj = {
          statusCode: 200,
          message: 'Success',
          payload: { email, username, phoneNumber }
        };
      } else {
        obj = {
          statusCode: 404,
          message: 'User Not Found'
        };
      }
      res.send(obj);
    })
    .catch(err => {
      console.log(err);

      const obj = {
        statusCode: 500,
        error: 'Internal Server Error',
        err: err
      };
      res.send(obj);
    });
};

export const getAll = (req, res) => {
  const query = `SELECT * from users`;

  executeSql(query)
    .then(response => {
      console.log(response);
      res.send(response);
    })
    .catch(err => {
      console.log(err);
      console.log(err.code);
    });
};

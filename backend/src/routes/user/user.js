import { executeSql } from '../../config/db';
import CryptoJS from 'crypto-js';
import path from 'path';

var dotenv = require('dotenv').config({
  path: path.resolve(process.cwd(), '.env')
});

export const insertUser = (req, res) => {
  const { email, fullName, mobileNumber, password, role } = req.body;
  const passwordHash = CryptoJS.MD5(
    password,
    process.env.ENCRYPTION_KEY
  ).toString();

  const query = `
  INSERT INTO users 
    (email, username, phoneNumber, passwordHash,
    emailConfirmed, twoFactorEnabled, phoneNumberConfirmed, 
    lockoutEnabled, accessFailedCount, role)
  VALUES
    (\'${email}\', \'${fullName}\', \'${mobileNumber}\', 
    \'${passwordHash}\', 0, 0, 0, 0, 0, \'${role}\')
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
        const { id, email, username, phoneNumber, role } = user;

        obj = {
          statusCode: 200,
          message: 'Success',
          payload: { id, email, username, phoneNumber, role }
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

export const get = (req, res) => {
  const { id } = req.params;

  const query = `
  SELECT * FROM users WHERE id = ${id}
  `;

  executeSql(query)
    .then(response => {
      // console.log(response);

      const [user] = response;
      console.log(user);

      const payload = {
        id: user.id,
        email: user.email,
        phoneNumber: user.phoneNumber,
        username: user.username,
        role: user.role
      };

      const obj = {
        statusCode: 200,
        message: 'Success',
        payload: payload
      };

      res.send(obj);
    })
    .catch(err => {
      console.log(err);

      const obj = {
        statusCode: 500,
        message: 'Internal Server Error',
        error: err
      };

      res.send(obj);
    });
};

export const getByUsername = (req, res) => {
  const { username } = req.params;

  const query = `
  SELECT * FROM users WHERE username = '${username}'
  `;

  executeSql(query)
    .then(response => {
      // console.log(response);

      const [user] = response;
      console.log(user);

      const payload = {
        email: user.email
      };

      const obj = {
        statusCode: 200,
        message: 'Success',
        payload: payload
      };

      res.send(obj);
    })
    .catch(err => {
      console.log(err);

      const obj = {
        statusCode: 500,
        message: 'Internal Server Error',
        error: err
      };

      res.send(obj);
    });
};

export const saveToken = (req, res) => {
  const { access_token, email } = req.body;

  const query = `
  UPDATE users SET token = '${access_token}'
  WHERE email = '${email}'
  `;

  executeSql(query)
    .then(response => {
      if (response.affectedRows > 0) {
        const obj = {
          statusCode: 200,
          message: 'Success'
        };
        res.send(obj);
      }
    })
    .catch(err => {
      const obj = {
        statusCode: 500,
        message: 'Internal Server Error',
        error: err
      };

      res.send(obj);
    });
};

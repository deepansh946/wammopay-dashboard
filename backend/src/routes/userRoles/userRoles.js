import { executeSql } from '../../config/db';
import CryptoJS from 'crypto-js';
import path from 'path';

var dotenv = require('dotenv').config({
  path: path.resolve(process.cwd(), '.env')
});

export const insert = (req, res) => {
  const { userId, parentId, role } = req.body;
  const query = `
  INSERT INTO user_roles
  (userId, parentId, role)
  VALUES
  (\'${userId}\', \'${parentId}\', \'${role}\')
  `;
  executeSql(query)
    .then(response => {
      console.log(response);
      //   res.send(response);
      if (response.affectedRows > 0) {
        const obj = {
          statusCode: 200,
          message: 'Success'
        };
        res.send(obj);
      }
    })
    .catch(err => {
      console.log(err);
      //   res.send(err);
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

export const deleteUserRole = (req, res) => {
  const { userId, parentId } = req.body;
  const query = `
    DELETE FROM user_roles
    WHERE userId = ${userId} AND parentId = ${parentId}
  `;

  console.log(query);

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
      console.log(err);

      var obj = {
        statusCode: 500,
        message: 'Internal Server Error',
        error: err
      };
      res.send(obj);
    });
};

export const getAll = (req, res) => {
  const { parentId } = req.params;

  const query = `
    SELECT * FROM user_roles
    WHERE parentId = '${parentId}'
    `;

  executeSql(query)
    .then(response => {
      const payload = response.map(obj => {
        const newObj = {
          parentId: obj.parentId,
          userId: obj.userId,
          role: obj.role
        };
        return newObj;
      });

      var obj = {
        statusCode: 200,
        message: 'Success',
        payload: payload
      };
      res.send(obj);
    })
    .catch(err => {
      console.log(err);

      var obj = {
        statusCode: 500,
        message: 'Internal Server Error',
        error: err
      };

      res.send(obj);
    });
};

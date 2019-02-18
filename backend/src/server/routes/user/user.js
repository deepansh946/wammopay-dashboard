import { executeSql } from '../../config/db';
import CryptoJS from 'crypto-js';

export const insertUser = (req, res) => {
  // console.log(req.body);
  const { email, fullName, mobileNumber, password } = req.body;
  // console.log(email, fullName, mobileNumber, password);
  const passwordHash = CryptoJS.MD5(
    password,
    process.env.ENCRYPTION_KEY
  ).toString();
  const query = `
  use [wammopay]
  INSERT INTO dbo.AspNetUsers (Email, UserName, PhoneNumber, PasswordHash,
    EmailConfirmed, TwoFactorEnabled, PhoneNumberConfirmed, LockoutEnabled, AccessFailedCount)
  VALUES
  (\'${email}\', \'${fullName}\', \'${mobileNumber}\', 
  \'${passwordHash}\', \'false\', \'false\', \'false\', \'false\', 0)
  `;

  // const query = `SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(\'dbo.AspNetUsers\')`;
  executeSql(query)
    .then(response => {
      // const names = response.map(key => key.name);
      console.log(response);

      if (response.rowsAffected[0] > 0) {
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

export const signIn = (req, res) => {
  const { email, password } = req.body;
  const passwordHash = CryptoJS.MD5(
    password,
    process.env.ENCRYPTION_KEY
  ).toString();
  const query = `
  use [wammopay]
  select * from dbo.AspNetUsers where Email=\'${email}\' and PasswordHash=\'${passwordHash}\';
  `;

  executeSql(query).then(response => {
    console.log(response);
    const [user] = response.recordset;

    if (response.rowsAffected[0] > 0) {
      const obj = {
        statusCode: 200,
        message: 'Success',
        payload: user
      };
      res.send(obj);
    } else {
      const obj = {
        statusCode: 404,
        message: 'User Not Found'
      };
      res.send(obj);
    }
  });
};

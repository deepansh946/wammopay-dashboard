import { executeSql } from '../../config/db';

export const insertUser = (req, res) => {
  // console.log(req.body);
  const { email, fullName, mobileNumber, password } = req.body;
  // console.log(email, fullName, mobileNumber, password);
  const query = `
  use [wammopay-dashboard]
  INSERT INTO dbo.AspNetUsers (Email, UserName, PhoneNumber, PasswordHash,
    EmailConfirmed, TwoFactorEnabled, LockoutEnabled, AccessFailedCount)
  VALUES
  (\'${email}\', \'${fullName}\', \'${mobileNumber}\', 
  HASHBYTES(\'SHA2_256\', \'${password}\'), \'false\', \'false\', \'false\', 0)
  `;

  // const query = `SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(\'dbo.AspNetUsers\')`;
  executeSql(query)
    .then(response => {
      // const names = response.map(key => key.name);
      console.log(response);

      if (response.rowsAffected.length > 0) {
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

import sql from 'mssql';
import { executeSql } from '../../config/db';

export const getList = (req, res) => {
  console.log(req.body);
  const { email, fullName, mobileNumber, password } = req.body;
  const query = `SELECT * from AspNetUsers`;
  executeSql(query, (data, err) => {
    if (err) {
      console.log(err);
      res.send('Internal Error Occured').statusCode(500);
    }

    res.send(data['recordset']);
    sql.close();
  });
};

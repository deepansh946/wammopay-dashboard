import sql from 'mssql';
import { dbConfig } from './index';

export const executeSql = (query, callback) => {
  const conn = new sql.connect(dbConfig);
  console.log('Database Connection Established');

  conn.then(() => {
    const req = new sql.Request();
    req
      .query(query)
      .then(res => {
        console.log(res);
        callback(res);
      })
      .catch(err => {
        console.log(err);
        callback(null, err);
      });
  });
  // console.log(res);
};

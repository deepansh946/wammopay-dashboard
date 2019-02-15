import sql from 'mssql';
import { dbConfig } from './index';

export async function executeSql(query) {
  return new Promise((resolve, reject) => {
    new sql.ConnectionPool(dbConfig)
      .connect()
      .then(pool => {
        return pool.request().query(query);
      })
      .then(result => {
        resolve(result);
        sql.close();
      })
      .catch(err => {
        reject(err);
        sql.close();
      });
  });
}

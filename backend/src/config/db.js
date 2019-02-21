import mysql from 'mysql';
import { dbConfig } from './index';

export async function executeSql(query) {
  return new Promise((resolve, reject) => {
    const conn = mysql.createConnection(dbConfig);
    conn.connect(err => {
      if (err) {
        reject(err);
      }

      conn.query(query, (err, rows, fields) => {
        if (err) {
          reject(err);
        }
        resolve(rows, fields);
      });
    });
  });
}

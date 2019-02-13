import sql from 'mssql';
import { dbConfig } from './index';

try {
  (async () => {
    const res = await sql.connect(dbConfig);
    console.log(res);
  })();
} catch (err) {
  console.log(err);
}

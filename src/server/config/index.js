export const isDEV = process.env.NODE_ENV === 'development';
export const PORT = isDEV ? process.env['DEV_PORT'] : process.env['PRO_PORT'];

export const dbConfig = {
  user: 'deepansh',
  password: 'password',
  server: 'localhost',
  database: 'databaseName'
};

export const JWT_SECRET = 'ENCRYPTION_IS_NECESSARY';

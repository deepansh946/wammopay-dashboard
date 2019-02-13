export const isDEV = process.env.NODE_ENV === 'development';

export const dbConfig = {
  user: 'deepansh',
  password: 'deepansh123',
  server: 'localhost\\MSSQLSERVER',
  options: {
    database: 'wammopay-dashboard'
  }
};

export const JWT_SECRET = 'ENCRYPTION_IS_NECESSARY';

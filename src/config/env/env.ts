export const DB_ENV = {
  url: process.env.DATABASE_URL,
};

export const SERVER_ENV = {
  env: process.env.APP_ENV || 'develop',
  debug: process.env.APP_DEBUG || true,
  port: process.env.APP_PORT || 3000,
  prefix: process.env.APP_PREFIX || 'api',
};

export const SWAGGER_ENV = {
  title: 'Swagger docs title',
  version: '1.0.0',
  url: 'api/docs',
};

export const JWT_ENV = {
  token: process.env.JWT_KEY,
};

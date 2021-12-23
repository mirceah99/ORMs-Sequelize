module.exports = {
  HOST: process.env.HOST || 'localhost',
  USER: process.env.USER || 'webadmin',
  PASSWORD: process.env.PASSWORD || 'webadmin',
  DB: process.env.DB,
  dialect: process.env.DIALECT || 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

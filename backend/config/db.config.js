module.exports = {
  HOST: 'database',
  USER: 'root',
  PASSWORD: 'docker',
  DB: 'testdb',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
};

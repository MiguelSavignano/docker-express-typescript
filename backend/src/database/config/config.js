module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'database_development',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    dialect: 'sqlite',
    logging: false,
    define: {
      charset: 'utf8',
      timestamps: true
    }
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME || 'database_production',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    dialect: 'mysql'
  }
};

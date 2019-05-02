module.exports = {
  development: {
    username: "root",
    password: "password",
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "password",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: "database_production",
    host: process.env.DATABASE_HOST || "127.0.0.1",
    dialect: "mysql"
  }
};

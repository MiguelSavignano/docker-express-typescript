console.log("***************");
console.log(process.env.DATABASE_USERNAME);
console.log(process.env.DATABASE_PASSWORD);
console.log(process.env.DATABASE_HOST);
console.log("***************");

module.exports = {
  development: {
    username: "root",
    password: "password",
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    dialect: "sqlite",
    logging: false,
    define: {
      charset: "utf8",
      timestamps: true
    }
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: "database_production",
    host: process.env.DATABASE_HOST || "127.0.0.1",
    dialect: "mysql"
  }
};

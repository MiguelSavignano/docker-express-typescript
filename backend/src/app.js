var express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load(__dirname + "/../swagger.yml");
const db = require("../models");
const routes = require("./routes");

var app = express();

const alowCorsMidleware = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};

app.use(alowCorsMidleware);
app.use(express.json());
app.use("/swagger-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", routes);

if (process.env.NODE_ENV !== "production") {
  db.sequelize.sync();
}

module.exports = app;

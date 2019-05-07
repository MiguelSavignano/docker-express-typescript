import * as express from "express";
import * as db from "../models";
import { Server } from "typescript-rest";
import { PostsController } from "./posts.controller";
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

let app: express.Application = express();

const alowCorsMidleware = (
  req: express.Request,
  res: express.Response,
  next
) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};

app.use(alowCorsMidleware);
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

if (process.env.NODE_ENV !== "production") {
  db.sequelize.sync();
}

Server.buildServices(app, PostsController);

app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
export default app;

import * as express from 'express';
import sequelize from './database/sequelize';
import { Server } from 'typescript-rest';
import { PostsController } from './controllers/PostsController';
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app: express.Application = express();

const alowCorsMidleware = (
  req: express.Request,
  res: express.Response,
  next
) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );

  if ('OPTIONS' === req.method) {
    res.send(200);
  } else {
    // move on
    next();
  }
};

app.use(alowCorsMidleware);
app.use(express.json());

app.use('/swagger-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

if (process.env.NODE_ENV !== 'production') {
  sequelize.sync();
}

Server.buildServices(app, PostsController);
app.get('/app', (req, res) => {
  res.json({ ok: true });
});

app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
export default app;

var express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load(__dirname + "/../swagger.yml");

var app = express();

const routes = require("./routes").routes;

const {
  getMockResponse,
  resolveHttpMethodAndUrlPath
} = require("../src/genMock");

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
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
);

Object.entries(routes).map(([path, value]) => {
  const [httpMethod, urlPath] = resolveHttpMethodAndUrlPath(path);
  console.log(httpMethod, urlPath);
  app[httpMethod](urlPath, (req, res) => {
    try {
      const mockData = getMockResponse(value, { req });
      res.json(mockData);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Mock server listening on port ${port}!!`);
});

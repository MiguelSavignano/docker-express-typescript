const routes = require("express").Router();
const PostController = require("./posts.controller");

routes.get("/posts", PostController.index);
routes.post("/posts", PostController.create);
routes.get("/post/:id", PostController.show);
routes.put("/post/:id", PostController.update);
routes.delete("/post/:id", PostController.destroy);

module.exports = routes;

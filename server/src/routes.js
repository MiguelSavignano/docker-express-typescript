const fs = require("fs");
const faker = require("faker");

module.exports.routes = {
  "/": "Hello world mock server",
  "/posts": "./fixtures/posts.json",
  "POST /posts": req => {
    return req.body;
  }
};

// curl -X POST -H "Content-Type: application/json" localhost:3000/posts -d '{"title": 1}'

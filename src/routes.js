const fs = require("fs");
const faker = require("faker");
const SECRET = "dN89hcfXFI";

module.exports.routes = {
  "/": "Hello world mock server",
  "/posts": "./fixtures/posts.json",
  "POST /posts": req => {
    return req.body;
  }
};

// module.exports.config = {
//   jwt_secret: SECRET,
//   jwt_routes: ["/my-orders", "/my-account"]
// };

// curl - X POST - H "Content-Type: application/json" localhost: 3020 / posts - d '{"title": 1}'

// SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAdGVzdC5jb20iLCJpYXQiOjE1NDU2MDYzNDJ9.bI9JDX8_PJJrxNwahSIKolrzJZ6G6vu__BRDgCj0ojs
// curl -H "Content-Type: application/json" -H "Authorization: Bearer ${SECRET}" localhost:3020/my-orders

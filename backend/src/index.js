const app = require("./server");
require("./posts.controller");

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Mock server listening on port ${port}!!`);
});

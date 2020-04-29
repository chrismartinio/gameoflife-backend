/** Simple demo Express app. */

const express = require("express");
const cors = require('cors');
const executeGame = require('./executeGame')

const app = express();

// for CORS
app.use(cors())

// for processing JSON:
app.use(express.json());

// homepage get
app.get("/", function (req, res) {
  return res.send("Hello World!");
});

// Execute game changes
app.post('/', function (req, res) {
  const array = req.body
  result = executeGame(array)
  return res.send(result)
})

/** Start server on port 3000 */

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});


module.exports = app
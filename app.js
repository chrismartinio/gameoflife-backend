/** Simple demo Express app. */

const express = require("express");
const cors = require('cors');
const executeGame = require('./executeGame')

const app = express();

// for CORS
app.use(cors())

// for processing JSON:
app.use(express.json());

// for processing forms:
app.use(express.urlencoded({ extended: true }));


/* Homepage renders simple message. */

app.get("/", function (req, res) {
  return res.send("Hello World!");
});

app.post('/', function (req, res) {
  const array = req.body
  result = executeGame(array)
  return res.send(result)
})

/** Add a new instructor. */

app.post("/api/staff", function(req, res) {
  // Do some database operation here...
  return res.send({
    fname: req.body.fname
  });
});
// end post

/** Sample of returning status code */

app.get("/whoops", function(req, res) {
  return res
          .status(404)
          .json("Whoops! Nothing here!");
});

/** Sample of validating / error handling */

app.get("/dogs/:name", function(req, res) {
  if (req.params.name !== "Whiskey") {
    return res
            .status(403)
            .json("Only Whiskey is Allowed.");
  }

  return res.json("Hello Whiskey!");
});

/** Start server on port 3000 */

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});

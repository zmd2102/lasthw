var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();
var routes = require("./routes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);
mongoose.Promise = global.Promise;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});

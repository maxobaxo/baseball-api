const express = require("express");
const MongoClient = require("mongodb/lib/mongo_client");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;
app.listen(
  port, 
  () => { console.log("we are live on port " + port) } 
  );
  
require('./app/routes')(app, {});
const express = require("express");
const bodyParser = require("body-parser");
const v1TeamRouter = require("./v1/routes/teamRoutes");

const app = express();
const port = process.env.port || 8080;

app.use(bodyParser.json());
app.use("/api/v1/teams", v1TeamRouter);

app.listen(port, () => { 
  console.log(`we are live on port ${port}`) 
});

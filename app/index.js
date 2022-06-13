const express = require("express");
const v1Router = require("./v1/routes");
const v1TeamRouter = require("./v1/routes/teamRoutes");

const app = express();
const port = process.env.port || 8080;

app.use("/api/v1", v1Router);
app.use("/api/v1/teams", v1TeamRouter);

app.listen(port, () => { 
  console.log(`we are live on port ${port}`) 
});

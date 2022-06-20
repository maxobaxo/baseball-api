const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "baseball-1.cyxpl5v7wwvo.us-west-2.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "kedge_furze!wordy5WHIPSAW"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  conn.end();
});

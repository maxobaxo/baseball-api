const db = require("./db.json");

const getAllTeams = () => {
  return db.teams;
};

module.exports = { getAllTeams }
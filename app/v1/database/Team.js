const db = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllTeams = () => {
  return db.teams;
};

const createNewTeam = (newTeam) => {
  const isAlreadyAdded =
    db.teams.findIndex((team) => team.title === newTeam.title) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `Team with the name ${newTeam.title} already exists`
    }
  }

  try {
    db.teams.push(newTeam);
    saveToDatabase(db);
    return newTeam;
  } catch (err) {
    res
      .status(error?.status || 500)
      .send({ 
        status: "failure", 
        data: { error: error?.message || error } 
      });
  }
};

module.exports = { getAllTeams, createNewTeam }
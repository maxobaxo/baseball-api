const { v4: uuid } = require("uuid");
const Team = require("../database/Team");

const getAllTeams = () => {
  try {
    const teams = Team.getAllTeams();
    return teams;
  } catch (error) {
    throw error;
  }
};

const getTeam = () => {
  return;
};

const createTeam = (newTeam) => {
  const teamToInsert = {
    ...newTeam,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  }

  try {
    const createdTeam = Team.createNewTeam(teamToInsert);
    return createdTeam;
  } catch (error) {
    throw error
  }
};

const updateTeam = () => {
  return;
};

const deleteTeam = () => {
  return;
};

module.exports = {
  getAllTeams,
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam
};

const Team = require("../database/Team");

const getAllTeams = () => {
  const teams = Team.getAllTeams();
  return teams;
};

const getTeam = () => {
  return;
};

const createTeam = () => {
  return;
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

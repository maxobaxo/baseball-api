const teamService = require("../services/teamService");

const getAllTeams = (req, res) => {
  const allTeams = teamService.getAllTeams();
  res.send({ status: "ok", data: allTeams })
};

const getTeam = (req, res) => {
  const team = teamService.getTeam();
  res.send("Get an existing team");
};

const createTeam = (req, res) => {
  const created = teamService.createTeam();
  res.send("Create a new team");
};

const updateTeam = (req, res) => {
  const updated = teamService.updateTeam();
  res.send("Update an existing team");
};

const deleteTeam = (req, res) => {
  const deleted = teamService.deleteTeam();
  res.send("Delete and existing team");
};

module.exports = {
  getAllTeams,
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam
};

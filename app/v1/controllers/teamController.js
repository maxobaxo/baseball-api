const teamService = require("../services/teamService");

const getAllTeams = (req, res) => {
  try {
    const allTeams = teamService.getAllTeams();
    res.status(200).send({ status: "ok", data: allTeams })
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ 
        status: "failed", 
        data: { error: error?.message || error}
      })
  }
};

const getTeam = (req, res) => {
  const { params: teamId } = req;
  if (!workoutId) {
    res
      .status(400)
      .send({
        status: "failed",
        data: { error: "Parameter ':teamId' can not be empty" },
      });
  }
  const team = teamService.getTeam();
  res.send("Get an existing team");
};

const createTeam = (req, res) => {
  const { body } = req;
  if (!body.title || !body.city) {
    res.status(400).send({ 
      status: "failure", 
      error: "One of the keys in the request body is missing or empty.",
      data: null 
    });
    return;
  }
  const newTeam = {
    title: body.title,
    city: body.city,
  }
  try {
    const created = teamService.createTeam(newTeam);
    res.status(201).send({ status: "ok", data: created });
  } catch (error) {
    throw { status: 500, message: error?.message || error }
  }
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

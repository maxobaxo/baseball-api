const express = require('express');
const teamController = require('../controllers/teamController');

const router = express.Router();

router.get('/', teamController.getAllTeams);

router.get('/:teamId', teamController.getTeam);

router.post('/', teamController.createTeam);

router.patch('/:teamId', teamController.updateTeam);

router.delete(':teamId', teamController.deleteTeam);

module.exports = router;

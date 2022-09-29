const express = require('express');
const apicache = require('apicache');
const teamController = require('../controllers/teamController');

const router = express.Router();
const cache = apicache.middleware;

router.get("/", cache("2 minutes"), teamController.getAllTeams);

router.get('/:teamId', teamController.getTeam);

router.post('/', teamController.createTeam);

router.patch('/:teamId', teamController.updateTeam);

router.delete(':teamId', teamController.deleteTeam);

module.exports = router;

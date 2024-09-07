
const upSeed = require('../../data/logic');
const Season = require('../../api/models/seasons');
const seasons = require('../../data/seasons');

upSeed(Season, seasons);



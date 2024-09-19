
const upSeed = require('../../utils/seeds/logic');
const Season = require('../../api/models/seasons');
const seasons = require('../../data/seasons');

upSeed(Season, seasons, 'seasons');



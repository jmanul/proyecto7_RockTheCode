const upSeed = require('../../data/logic');
const Actor = require('../../api/models/actors');
const actors = require('../../data/actors');

upSeed(Actor, actors);
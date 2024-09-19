const upSeed = require('../../utils/seeds/logic');
const Actor = require('../../api/models/actors');
const actors = require('../../data/actors');

upSeed(Actor, actors, 'actors');
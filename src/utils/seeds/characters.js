const upSeed = require('../../utils/seeds/logic');
const Character = require('../../api/models/characters');
const characters = require('../../data/characters');

upSeed(Character, characters, 'characters');
const upSeed = require('../../data/logic');
const Character = require('../../api/models/characters');
const characters = require('../../data/characters');

upSeed(Character, characters);
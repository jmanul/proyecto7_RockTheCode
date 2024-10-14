
const upSeed = require('./logic');
const Piece = require('../../api/models/pieces');
const pieces = require('../../data/pieces');

upSeed(Piece,pieces, 'pieces');
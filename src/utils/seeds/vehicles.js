const upSeed = require('./logic');
const Vehicle = require('../../api/models/vehicles');
const vehicles = require('../../data/vehicles');

upSeed(Vehicle, vehicles, 'vehicles');
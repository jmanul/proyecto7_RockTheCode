
const upSeed = require('./logic');
const Service = require('../../api/models/services');
const services = require('../../data/services');

upSeed(Service, services, 'services');



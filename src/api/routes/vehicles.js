
const { getVehicles, getVehicleById, postVehicle, putVehicle, deleteVehicle } = require("../controllers/vehicles");


const vehiclesRouter = require('express').Router();

vehiclesRouter.get('/:id', getVehicleById);
vehiclesRouter.get('/', getVehicles);
vehiclesRouter.post('/', postVehicle);
vehiclesRouter.put('/:id', putVehicle);
vehiclesRouter.delete('/:id', deleteVehicle);

module.exports = vehiclesRouter;

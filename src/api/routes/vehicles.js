
const { isAuth } = require("../../middleware/isAuth");
const { rolAuth } = require("../../middleware/rolAuth");
const { getVehicles, getVehicleById, postVehicle, putVehicle, addVehicleService,deleteVehicle } = require("../controllers/vehicles");


const vehiclesRouter = require('express').Router();

vehiclesRouter.get('/:id', isAuth, rolAuth('administrator'), getVehicleById);
vehiclesRouter.get('/', isAuth, rolAuth('administrator'), getVehicles);
vehiclesRouter.post('/', isAuth, rolAuth('administrator'), postVehicle);
vehiclesRouter.put('/:id', isAuth, rolAuth('administrator'), putVehicle);
vehiclesRouter.put('/:id/service', isAuth, rolAuth('administrator'), addVehicleService);
vehiclesRouter.delete('/:id', isAuth, rolAuth('administrator'), deleteVehicle);

module.exports = vehiclesRouter;

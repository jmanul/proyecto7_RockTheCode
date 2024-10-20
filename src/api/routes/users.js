
const { isAuth } = require("../../middleware/isAuth");
const { rolAuth } = require("../../middleware/rolAuth");
const { getUsers, getUserById, getUserByVehicle, postUser, putUser, removeVehicleFromUser,  deleteUser} = require("../controllers/users");


const usersRouter = require('express').Router();

usersRouter.get('/:id', getUserById);
usersRouter.get('/vehicles/:plate', getUserByVehicle);
usersRouter.get('/', isAuth, rolAuth('administrator'), getUsers);
usersRouter.post('/', postUser);
usersRouter.put('/:id', putUser);
usersRouter.delete('/:idUser/vehicles/:idVehicle', removeVehicleFromUser,);
usersRouter.delete('/:id', deleteUser);

module.exports = usersRouter;

const { idAuth } = require("../../middleware/idAuth");
const { isAuth } = require("../../middleware/isAuth");
const { rolAuth } = require("../../middleware/rolAuth");
const { getUsers, getUserById, getUserByVehicle, postUser, putUser, removeVehicleFromUser,  deleteUser} = require("../controllers/users");


const usersRouter = require('express').Router();

usersRouter.get('/:id', isAuth, rolAuth('user', 'administrator'), idAuth, getUserById);
usersRouter.get('/vehicles/:plate', isAuth, rolAuth('administrator'), getUserByVehicle);
usersRouter.get('/', isAuth, rolAuth('administrator'), getUsers);
usersRouter.post('/', isAuth, rolAuth('administrator'), postUser);
usersRouter.put('/:id', isAuth, rolAuth('user', 'administrator'), putUser);
usersRouter.delete('/:idUser/vehicles/:idVehicle', isAuth, rolAuth('administrator'), removeVehicleFromUser,);
usersRouter.delete('/:id', isAuth, rolAuth('administrator'), deleteUser);


module.exports = usersRouter;
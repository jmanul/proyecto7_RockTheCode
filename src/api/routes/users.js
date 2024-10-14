
const { getUsers, getUserById, getUserByVehicle, postUser, putUser, deleteUser} = require("../controllers/users");


const usersRouter = require('express').Router();

usersRouter.get('/:id', getUserById);
usersRouter.get('/vehicle/:vehicleId', getUserByVehicle);
usersRouter.get('/', getUsers);
usersRouter.post('/', postUser);
usersRouter.put('/:id', putUser);
usersRouter.delete('/:id', deleteUser);

module.exports = usersRouter;


const User = require("../models/users");
const Vehicle = require("../models/vehicles");
const bcrypt = require('bcrypt');


const getUsers = async (req, res, next) => {

     try {

          const users = await User.find().populate({
               path: 'vehicles',
               select: 'plate brand model engine services',
               populate: {
                    path: 'services',
                    select: 'name price time',
                    populate: {
                         path: 'pieces',
                         select: 'name price'
               }
               }
          });
     
          if (!users) {
               return res.status(404).json({ message: 'usuarios no encontrados' });
          }

          return res.status(200).json(users);

     } catch (error) {

          return res.status(404).json(error);

     }
};


const getUserById = async (req, res, next) => {

     try {

          const { id } = req.params;
          const user = await User.findById(id).populate({
               path: 'vehicles',
               select: 'plate brand model engine services',
               populate: {
                    path: 'services',
                    select: 'name price time',
                    populate: {
                         path: 'pieces',
                         select: 'name price'
                    }
               }
          });

          if (!user) {
               return res.status(404).json({ message: 'usuario no encontrado' });
          }

          return res.status(200).json(user);

     } catch (error) {

          return res.status(404).json(error);

     }
};

const getUserByVehicle = async (req, res, next) => {

     try {

          const { plate } = req.params;

          const vehicle = await Vehicle.findOne({ plate });
          if (!vehicle) {
               return res.status(404).json({ message: 'Vehiculo no encontrado' });
          }

          const user = await User.findOne({vehicles : vehicle }).populate({
               path: 'vehicles',
               select: 'plate brand model engine services',
               populate: {
                    path: 'services',
                    select: 'name price time',
                    populate: {
                         path: 'pieces',
                         select: 'name price'
                    }
               }
          });

          if (!user) {
               return res.status(404).json({ message: 'usuario no encontrado' });
          }

          return res.status(200).json(user);

     } catch (error) {

          return res.status(404).json(error);

     }
};

const postUser = async (req, res, next) => {

     try {

          const { userName, password, vehicles, roll } = req.body;
          
          const existUser = await User.findOne({ userName });

          if (existUser) {
               return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
          }

          if (!vehicles) {

               const newUser = new User({
                    userName,
                    password,
                    roll,
                    vehicles: []

               });

               const userSave = await newUser.save();
               return res.status(201).json({
                    message: 'usuario creado correctamente',
                    user: userSave
               });
          }
           

          if (vehicles.length > 0) {

               const uniqueVehicles = [...new Set(vehicles)];

               const validVehicles = await Vehicle.find({ _id: { $in: uniqueVehicles } });

               const validVehiclesIds = validVehicles.map(vehicle => vehicle._id.toString());

             const newUser = new User({
                    userName,
                    password,
                    roll,
                    vehicles: validVehiclesIds

             });
               
               const userSave = await newUser.save();
               return res.status(201).json({
                    message: 'usuario creado correctamente',
                    user: userSave
               });

          } 
      

          
     } catch (error) {

          return res.status(404).json(error);
     }


};


const putUser = async (req, res, next) => {

     try {
 
          const { id } = req.params;
          const { vehicles: newVehicles,password, ...rest } = req.body;

          let validVehiclesIds = [];

          if (newVehicles) {

               const validVehicles = await Vehicle.find({ _id: { $in: newVehicles } });

               validVehiclesIds = validVehicles.map(vehicle => vehicle._id.toString());
          }

          const updateData = { ...rest }
          
          // si hay nuevo password lo encryptamos

          if (password) {
               const hashedPassword = await bcrypt.hash(password, 10);
               updateData.password = hashedPassword;
          }

          // actualizamos el usuario sin los vehiculos

          const userUpdate = await User.findByIdAndUpdate(id, updateData, { new: true });

          // añadimos los nuevos vehiculos si los hay y actualizamos

          if (validVehiclesIds.length > 0) {
               await User.findByIdAndUpdate(id, {
                    $addToSet: { vehicles: { $each: validVehiclesIds } },
               }, { new: true });
          }

          if (!userUpdate) {
               return res.status(404).json({ message: 'usuario no encontrado' });
          }

          return res.status(200).json(userUpdate);


     } catch (error) {

          return res.status(404).json(error);
     }
};


const removeVehicleFromUser = async (req, res, next) => {
     try {
          const { idUser, idVehicle } = req.params;


          const userUpdate = await User.findByIdAndUpdate(
               idUser,
               { $pull: { vehicles: idVehicle } }, 
               { new: true }
          );

          if (!userUpdate) {
               return res.status(404).json({ message: 'usuario no encontrado' });
          }

          return res.status(200).json({
               message: 'El vehiculo fue eliminado',
               vehicle: idVehicle,
               user: userUpdate
          });

     } catch (error) {
          return res.status(404).json(error);
     }
};


const deleteUser = async (req, res, next) => {

     try {

          const { id } = req.params;
          const userDelete = await User.findByIdAndDelete(id);

          if (!userDelete) {
               return res.status(404).json({ message: 'usuario no encontrado' });
          }

          return res.status(200).json({
               message: 'El usuario fue eliminado',
               user: userDelete
          });

     } catch (error) {

          return res.status(404).json(error);

     }
};


module.exports = {

     getUsers,
     getUserById,
     getUserByVehicle,
     postUser,
     putUser,
     removeVehicleFromUser,
     deleteUser
};
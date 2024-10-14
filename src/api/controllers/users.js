

const User = require("../models/users");


const getUsers = async (req, res, next) => {

     try {

          const users = await User.find().populate({
               path: 'vehicles',
               select: 'plate brand model engine',
               populate: {
                    path: 'services',
                    select: 'name price time'
               },
               populate: {
                    path: 'pieces',
                    select: 'name price'
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
               path:'vehicles',
               select: 'plate brand model engine',
               populate: {
                    path: 'services',
                    select: 'name price time'
               },
               populate: {
                    path: 'pieces',
                    select: 'name price'
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

          const { vehicles } = req.params;
          const user = await User.find({vehicles}).populate({
               path: 'vehicles',
               select: 'plate brand model engine',
               populate: {
                    path: 'services',
                    select: 'name price time'
               },
               populate: {
                    path: 'pieces',
                    select: 'name price'
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

          const newUser = new User(req.body);
          const userSave = await newUser.save();
          return res.status(201).json({
               message: 'usuario creado correctamente',
               service: userSave
          });

     } catch (error) {

          return res.status(404).json(error);
     }


};
const putUser = async (req, res, next) => {

     try {

          const { id } = req.params;

          const userUpdate = await User.findByIdAndUpdate(id, req.body, { new: true });

          if (!userUpdate) {
               return res.status(404).json({ message: 'usuario no encontrado' });
          }

          return res.status(200).json(userUpdate);


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
     deleteUser
};
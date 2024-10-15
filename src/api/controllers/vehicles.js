
const Vehicle = require("../models/vehicles");


const getVehicles = async (req, res, next) => {

     try {

          const vehicles = await Vehicle.find().populate({
               path: 'services',
               select: 'name price time pieces',
               populate: {
                    path: 'pieces',
                    select: 'name price'
               }
          })
          
          if (!vehicles) {
               return res.status(404).json({ message: 'vehiculos no encontrados' });
          }

          return res.status(200).json(vehicles);

     } catch (error) {

          return res.status(404).json(error);

     }
};


const getVehicleById = async (req, res, next) => {

     try {

          const { id } = req.params;
          const vehicle = await Vehicle.findById(id).populate({
               path: 'services',
               select: 'name price time pieces',
               populate: {
                    path: 'pieces',
                    select: 'name price'
               }
              
          })

          if (!vehicle) {
               return res.status(404).json({ message: 'vehiculo no encontrado' });
          }

          return res.status(200).json(vehicle);

     } catch (error) {

          return res.status(404).json(error);

     }
};

const postVehicle = async (req, res, next) => {

     try {

          const newVehicle = new Vehicle(req.body);
          const VehicleSave = await newVehicle.save();
          return res.status(201).json({
               message: 'vehiculo creado correctamente',
               service: VehicleSave
          });

     } catch (error) {

          return res.status(404).json(error);
     }


};
const putVehicle = async (req, res, next) => {

     try {

          const { id } = req.params;

          const VehicleUpdate = await Vehicle.findByIdAndUpdate(id, req.body, { new: true });

          if (!VehicleUpdate) {
               return res.status(404).json({ message: 'vehiculo no encontrado' });
          }

          return res.status(200).json(VehicleUpdate);


     } catch (error) {

          return res.status(404).json(error);
     }
};

const deleteVehicle = async (req, res, next) => {

     try {

          const { id } = req.params;
          const VehicleDelete = await Vehicle.findByIdAndDelete(id);

          if (!VehicleDelete) {
               return res.status(404).json({ message: 'vehiculo no encontrado' });
          }

          return res.status(200).json({
               message: 'El vehiculo fue eliminado',
               vehicle: VehicleDelete
          });

     } catch (error) {

          return res.status(404).json(error);

     }
};


module.exports = {

     getVehicles,
     getVehicleById,
     postVehicle,
     putVehicle,
     deleteVehicle
};


const Service = require("../models/services");


const getServices = async (req, res, next) => {

     try {

          const services = await Service.find().populate({
               path: 'pieces', 
               slect :'name price'
          });

          if (!services) {
               return res.status(404).json({ message: 'servicios no encontrados' });
          }

          return res.status(200).json(services);

     } catch (error) {

          return res.status(404).json(error);

     }
};


const getServiceById = async (req, res, next) => {

     try {

          const { id } = req.params;
          const service = await Service.findById(id).populate({
               path: 'pieces',
               slect: 'name price'
          });

          if (!service) {
               return res.status(404).json({ message: 'servicio no encontrado' });
          }

          return res.status(200).json(service);

     } catch (error) {

          return res.status(404).json(error);

     }
};

const postService = async (req, res, next) => {

     try {

          const newService = new Service(req.body);
          const serviceSave = await newService.save();
          return res.status(201).json({
               message: 'servicio creado correctamente',
               service: serviceSave
           });

     } catch (error) {

          return res.status(404).json(error);
     }


};
const putService = async (req, res, next) => {

     try {

          const { id } = req.params;

          const serviceUpdate = await Service.findByIdAndUpdate(id, req.body, { new: true });

          if (!serviceUpdate) {
               return res.status(404).json({ message: 'servicio no encontrado' });
          }

          return res.status(200).json(serviceUpdate);


     } catch (error) {

          return res.status(404).json(error);
     }
};

const deleteService = async (req, res, next) => {

     try {

          const { id } = req.params;
          const serviceDelete = await Service.findByIdAndDelete(id);

          if (!serviceDelete) {
               return res.status(404).json({ message: 'servicio no encontrado' });
          }

          return res.status(200).json({
               message: 'El servicio fue eliminado',
               service: serviceDelete
          });

     } catch (error) {

          return res.status(404).json(error);

     }
};


module.exports = {

     getServices,
     getServiceById,
     postService,
     putService,
     deleteService
};
const { getServices, getServiceById, postService, putService, deleteService } = require("../controllers/services");


const servicesRouter = require('express').Router();

servicesRouter.get('/:id', getServiceById);
servicesRouter.get('/', getServices);
servicesRouter.post('/', postService);
servicesRouter.put('/:id', putService);
servicesRouter.delete('/:id', deleteService

);

module.exports = servicesRouter;

     
     
     
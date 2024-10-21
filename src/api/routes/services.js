const { isAuth } = require("../../middleware/isAuth");
const { rolAuth } = require("../../middleware/rolAuth");
const { getServices, getServiceById, postService, putService, deleteService } = require("../controllers/services");


const servicesRouter = require('express').Router();

servicesRouter.get('/:id', isAuth, rolAuth('administrator'), getServiceById);
servicesRouter.get('/', isAuth, rolAuth('user','administrator'), getServices);
servicesRouter.post('/', isAuth, rolAuth('administrator'), postService);
servicesRouter.put('/:id', isAuth, rolAuth('administrator'), putService);
servicesRouter.delete('/:id', isAuth, rolAuth('administrator'), deleteService

);

module.exports = servicesRouter;

     
     
     
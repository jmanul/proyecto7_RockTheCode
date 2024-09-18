const { getActors, postActor, putActor, deleteActor, getActorsByName, getActorById } = require("../controllers/actors");


const actorsRouter = require('express').Router();

actorsRouter.get('/:name', getActorsByName);
actorsRouter.get('/:id', getActorById);
actorsRouter.get('/', getActors);
actorsRouter.post('/', postActor);
actorsRouter.put('/:id', putActor);
actorsRouter.delete('/:id', deleteActor);

module.exports = actorsRouter;




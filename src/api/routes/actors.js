const { getActors, postActor, putActor, removeSeasonFromActor, deleteActor, getActorsByName, getActorById } = require("../controllers/actors");


const actorsRouter = require('express').Router();

actorsRouter.get('/:name', getActorsByName);
actorsRouter.get('/id/:id', getActorById);
actorsRouter.get('/', getActors);
actorsRouter.post('/', postActor);
actorsRouter.put('/:id', putActor);
actorsRouter.delete('/:actorId/seasons/:seasonId', removeSeasonFromActor);
actorsRouter.delete('/:id', deleteActor);

module.exports = actorsRouter;




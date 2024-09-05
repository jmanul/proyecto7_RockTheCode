
const { getSeasons, getSeasonsByName, getSeasonById, postSeason, putSeason, deleteSeason } = require("../controllers/seasons");


const seasonsRouter = require('express').Router();

seasonsRouter.get('/name/:name', getSeasonsByName);
seasonsRouter.get('/:id', getSeasonById);
seasonsRouter.get('/', getSeasons);
seasonsRouter.post('/', postSeason);
seasonsRouter.put('/:id', putSeason);
seasonsRouter.delete('/:id', deleteSeason);

module.exports = seasonsRouter;
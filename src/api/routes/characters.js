const { getCharacters, postCharacters, putCharacters, deleteCharacters, getCharactersByName, getCharactersById, getCharactersActor, getCharactersBySeason } = require("../controllers/characters");


const charactersRouter = require('express').Router();

charactersRouter.get('/name/:name', getCharactersByName);
charactersRouter.get('/actor/:actor', getCharactersActor);
charactersRouter.get('/season/:season',getCharactersBySeason);
charactersRouter.get('/:id', getCharactersById);
charactersRouter.get('/', getCharacters);
charactersRouter.post('/', postCharacters);
charactersRouter.put('/:id', putCharacters);
charactersRouter.delete('/:id', deleteCharacters);

module.exports = charactersRouter;

     
     
     
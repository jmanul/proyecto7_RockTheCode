const { getCharacters, postCharacter, putCharacter, deleteCharacter, getCharactersByName, getCharacterById, getCharactersByActor, getCharactersBySeason } = require("../controllers/characters");


const charactersRouter = require('express').Router();

charactersRouter.get('/name/:name', getCharactersByName);
charactersRouter.get('/actor/:actor', getCharactersByActor);
charactersRouter.get('/season/:season',getCharactersBySeason);
charactersRouter.get('/:id', getCharacterById);
charactersRouter.get('/', getCharacters);
charactersRouter.post('/', postCharacter);
charactersRouter.put('/:id', putCharacter);
charactersRouter.delete('/:id', deleteCharacter

);

module.exports = charactersRouter;

     
     
     
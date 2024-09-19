const { getCharacters, postCharacter, putCharacter, deleteCharacter, getCharacterById, getCharactersByActor, getCharactersBySeason } = require("../controllers/characters");


const charactersRouter = require('express').Router();


charactersRouter.get('/actor/:actor', getCharactersByActor);
charactersRouter.get('/season/:season',getCharactersBySeason);
charactersRouter.get('/:id', getCharacterById);
charactersRouter.get('/', getCharacters);
charactersRouter.post('/', postCharacter);
charactersRouter.put('/:id', putCharacter);
charactersRouter.delete('/:id', deleteCharacter

);

module.exports = charactersRouter;

     
     
     
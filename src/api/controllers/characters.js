const Character = require("../models/characters");



const getCharacters = async (req, res, next) => { 

     try {

          const characters = await Character.find();
          return res.status(200).json(characters);
          
     } catch (error) {

          return res.status(404).json(error);
          
     }
};

const getCharactersByName = async (req, res, next) => { 

     try {

          const { name } = req.params;
          const character = await Character.find({ name});
          return res.status(200).json(character);
          
     } catch (error) {
          
          return res.status(404).json(error);

     }
};

const getCharactersBySeason = async (req, res, next) => { 

     try {

          const { season } = req.params;
          const character = await Character.find({ season});
          return res.status(200).json(character);
          
     } catch (error) {
          
          return res.status(404).json(error);

     }
};

const getCharactersActor = async (req, res, next) => { 

     try {

          const { actor } = req.params;
          const character = await Character.find({ actor });
          return res.status(200).json(character);
          
     } catch (error) {
          
          return res.status(404).json(error);

     }
};
const getCharactersById = async (req, res, next) => { 

     try {

          const { id } = req.params;
          const character = await Character.findById(id);
          return res.status(200).json(character);
          
     } catch (error) {

          return res.status(404).json(error);
          
     }
};

const postCharacters = async (req, res, next) => { 

     try {

          const newCharacter = new Character(req.body);
          const characterSave = await newCharacter.save();
          return res.status(201).json(characterSave);
          
     } catch (error) {
          
          return res.status(404).json(error);
     }
};
const putCharacters = async (req, res, next) => { 

     try {
          
          const { id } = req.params;
          const newCharacter = new Character(req.body);
          newCharacter._id = id;
          const characterUpdate = await Character.findByIdAndUpdate(id, newCharacter, {new : true});
          return res.status(200).json(characterUpdate);
          
          
     } catch (error) {
          
          return res.status(404).json(error);
     }
};
const deleteCharacters = async (req, res, next) => { 

     try {

          const { id } = req.params;
          const characterDelete = await Character.findByIdAndDelete(id);
          return res.status(200).json(characterDelete);
          
     } catch (error) {

          return res.status(404).json(error);
          
     }
};


module.exports = {

     getCharacters,
     getCharactersByName,
     getCharactersBySeason,
     getCharactersActor,
     postCharacters,
     putCharacters,
     deleteCharacters,
     getCharactersById
};
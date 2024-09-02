
const Actor = require("../models/actors");



const getActors = async (req, res, next) => {

     try {

          const actors = await Actor.find();
          return res.status(200).json(actors);

     } catch (error) {

          return res.status(404).json(error);

     }
};

const getActorsByName = async (req, res, next) => {

     try {

          const { name } = req.params;
          const actor = await Actor.find({ name });
          return res.status(200).json(actor);

     } catch (error) {

          return res.status(404).json(error);

     }
};


const getActorById = async (req, res, next) => {

     try {

          const { id } = req.params;
          const actor = await Actor.findById(id);
          return res.status(200).json(actor);

     } catch (error) {

          return res.status(404).json(error);

     }
};

const postActor = async (req, res, next) => {

     try {

          const newActor = new Actor(req.body);
          const actorSave = await newActor.save();
          return res.status(201).json(actorSave);

     } catch (error) {

          return res.status(404).json(error);
     }
};
const putActor = async (req, res, next) => {

     try {

          const { id } = req.params;
          const newActor = new Actor(req.body);
          newActor._id = id;
          const actorUpdate = await Actor.findByIdAndUpdate(id, newActor, { new: true });
          return res.status(200).json(actorUpdate);


     } catch (error) {

          return res.status(404).json(error);
     }
};
const deleteActor = async (req, res, next) => {

     try {

          const { id } = req.params;
          const actorDelete = await Actor.findByIdAndDelete(id);
          return res.status(200).json(actorDelete);

     } catch (error) {

          return res.status(404).json(error);

     }
};


module.exports = {

     getActors,
     getActorById,
     getActorsByName,
     postActor,
     putActor,
     deleteActor
};
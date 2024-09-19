
const Actor = require("../models/actors");
const Season = require("../models/seasons");


const getActors = async (req, res, next) => {

     try {

          const actors = await Actor.find().populate('seasons', { _id: 0, number: 1, name: 1 });
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

          const { name, image, birthdate, seasons } = req.body;


          if (seasons.length > 0) {

               // Elimina duplicados en el array 

               const uniqueSeasons = [...new Set(seasons)];

               // Verifica que los ObjectIds en el array seasons existen

               const validSeasons = await Season.find({ _id: { $in: uniqueSeasons } });

               // Filtrar solo los IDs válidos

               const validSeasonIds = validSeasons.map(season => season._id.toString());

               const newActor = new Actor({
                    name,
                    image,
                    birthdate,
                    seasons: validSeasonIds // Guardar solo los IDs que son válidos
               });

               const actorSave = await newActor.save();
               return res.status(201).json(actorSave);

          } else {

               const newActor = new Actor({
                    name,
                    image,
                    birthdate,
                    seasons: []
               });

               const actorSave = await newActor.save();
               return res.status(201).json(actorSave);

          }

     } catch (error) {

          return res.status(404).json({ message: 'Error al crear el actor', error });
     }
};
const putActor = async (req, res, next) => {

     try {

          const { id } = req.params;
          const { seasons: newSeasons, ...rest } = req.body;

          // si se añaden nuevos ids a seasons comprobamos si existen en la coleccion

          let validSeasonIds = [];

          if (newSeasons) {

               const validSeasons = await Season.find({ _id: { $in: newSeasons } });

               validSeasonIds = validSeasons.map(seasons => seasons._id.toString());
          }

          // objeto de actualizacion sin seasons

          const updateData = { ...rest }

          // si hay nuevos ids en seasons los añadimos al objeto de actualizacion evitando duplicidades de en el array seasons

          if (validSeasonIds.length > 0) {

               updateData.$addToSet = { seasons: { $each: validSeasonIds } };
          }

          const actorUpdate = await Actor.findByIdAndUpdate(id, updateData, { new: true });
          return res.status(200).json(actorUpdate);


     } catch (error) {

          return res.status(500).json({ message: 'Error del servidor', error });
     }
};


const removeSeasonFromActor = async (req, res, next) => {
     try {
          const { actorId, seasonId } = req.params;


          const actorUpdate = await Actor.findByIdAndUpdate(
               actorId,
               { $pull: { seasons: seasonId } }, // Elimina la temporada del array `seasons`
               { new: true }
          );

          return res.status(200).json(actorUpdate);

     } catch (error) {
          return res.status(500).json({ message: 'Error del servidor', error });
     }
};



const deleteActor = async (req, res, next) => {

     try {

          const { id } = req.params;
          const actorDelete = await Actor.findByIdAndDelete(id);
          return res.status(200).json(actorDelete);

     } catch (error) {

          return res.status(500).json({ message: 'Error del servidor', error });

     }
};


module.exports = {

     getActors,
     getActorById,
     getActorsByName,
     postActor,
     putActor,
     removeSeasonFromActor,
     deleteActor
};
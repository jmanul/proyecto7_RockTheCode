
const Season = require("../models/seasons");



const getSeasons = async (req, res, next) => {

     try {

          const seasons = await Season.find();
          return res.status(200).json(seasons);

     } catch (error) {

          return res.status(404).json(error);

     }
};

const getSeasonsByName = async (req, res, next) => {

     try {

          const { name } = req.params;
          const season = await Season.find({ name });
          return res.status(200).json(season);

     } catch (error) {

          return res.status(404).json(error);

     }
};


const getSeasonById = async (req, res, next) => {

     try {

          const { id } = req.params;
          const season = await Season.findById(id);
          return res.status(200).json(season);

     } catch (error) {

          return res.status(404).json(error);

     }
};

const postSeason = async (req, res, next) => {

     try {

          const newSeason = new Season(req.body);
          const seasonSave = await newSeason.save();
          return res.status(201).json(seasonSave);

     } catch (error) {

          return res.status(404).json(error);
     }
};
const putSeason = async (req, res, next) => {

     try {

          const { id } = req.params;
       
          const seasonUpdate = await Season.findByIdAndUpdate(id, req.body, { new: true });
          return res.status(200).json(seasonUpdate);


     } catch (error) {

          return res.status(404).json(error);
     }
};
const deleteSeason = async (req, res, next) => {

     try {

          const { id } = req.params;
          const seasonDelete = await Season.findByIdAndDelete(id);
          return res.status(200).json(seasonDelete);

     } catch (error) {

          return res.status(404).json(error);

     }
};


module.exports = {

     getSeasons,
     getSeasonById,
     getSeasonsByName,
     postSeason,
     putSeason,
     deleteSeason
};
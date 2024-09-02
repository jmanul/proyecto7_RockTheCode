const mongoose = require('mongoose');

const seasonSchema = new mongoose.Schema({

     number: { type: Number, required: true },
     name: { type: String, required: true },
     image: { type: String, required: true },
     chapters: [{ type: String, required: true }]
},
     {
          timestamps: true,
          collection: 'seasons'
     });

const Season = mongoose.model('seasons', seasonSchema, 'seasons');

module.exports = Season;
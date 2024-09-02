const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({

     name : { type: String, required: true },
     image: [{ type: String, required: true }],
     // actor: { type: mongoose.Types.ObjectId, ref: 'actors', required: true },
     // season: { type: mongoose.Types.ObjectId, ref: 'seasons', required: true },
     description: { type: String, required: true },

},
     {
          timestamps: true,
          collection: 'characters'
     });

const Character = mongoose.model('characters', characterSchema, 'characters');

module.exports = Character;
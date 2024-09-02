const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({

     name: { type: String, required: true },
     image: [{ type: String, required: true }],
     age: { type: Number, required: true }
},
     {
          timestamps: true,
          collection: 'actors'
     });

const Actor = mongoose.model('actors', actorSchema, 'actors');

module.exports = Actor;
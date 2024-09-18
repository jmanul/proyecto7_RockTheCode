const mongoose = require('mongoose');


const actorSchema = new mongoose.Schema({

     name: { type: String, required: true },
     image: [{ type: String, required: true }],
     birthdate: { type: Date, required: true },
     seasons: [{ type: mongoose.Types.ObjectId, ref: 'seasons', required: false, unique: true }]
},
     {
          timestamps: true,
          collection: 'actors'
     });

actorSchema.pre('save', function (next){
    
     if (this.seasons) {
          // Eliminar duplicados en el array seasons cuansdo usamos save() con el metodo post.
          this.seasons = [...new Set(this.seasons)];
     }
     next();
});


const Actor = mongoose.model('actors', actorSchema, 'actors');

module.exports = Actor;
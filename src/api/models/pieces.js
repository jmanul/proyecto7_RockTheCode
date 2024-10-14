const mongoose = require('mongoose');

const pieceSchema = new mongoose.Schema({

     name: { type: String, required: true },
     price: { type: Number, required: true }, 
     description: { type: String, required: true}
     
},
     {
          timestamps: true,
          collection: 'pieces'
     });

const Piece = mongoose.model('pieces', pieceSchema, 'pieces');

module.exports = Piece;
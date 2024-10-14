const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({

     name: { type: String, required: true },
     price: { type: Number, required: true },
     time: { type: Number, required: false },
     description: { type: String, required: true },
     pieces: [{ type: mongoose.Types.ObjectId, ref: 'pieces', required: false }]

},
     {
          timestamps: true,
          collection: 'services'
     });

const Service = mongoose.model('services', serviceSchema, 'services');

module.exports = Service;
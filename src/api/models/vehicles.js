
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
     
     plate: { type: String, required: true, trim: true },
     brand: { type: String, required: true},
     model: { type: String, required: true},
     engine: { type: String, required: true, enum: ["gasoline", "diesel", "electric"], trim: true },
     services: [
          {
               serviceId: {
                    type: mongoose.Types.ObjectId,
                    ref: 'services',
                    required: false,
                    trim: true

               },                       
               date: {                 
                    type: Date,        
                    required: true,
                    default: Date.now  
               }
          }
     ]
},
     {
          timestamps: true,
          collection: 'vehicles'
     });


const Vehicle = mongoose.model('vehicles', vehicleSchema, 'vehicles');

module.exports = Vehicle;


const mongoose = require('mongoose');


const connectDDBB = async () => {

     await mongoose.connect(process.env.DB_URL);
     console.log('conectado 😄');

     try {
          
     } catch (error) {

          console.log('Ha sido imposible conectar 😒');
     }
};
 
module.exports = { connectDDBB };
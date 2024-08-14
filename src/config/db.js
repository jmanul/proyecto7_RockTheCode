
const mongoose = require('mongoose');


const conectDDBB = async () => { 

     try {

          await mongoose.connect(process.env.DDBB_URL);
          console.log('conectado 😃');
          
     } catch (error) {

          console.log('Ha sido imposible connectar 😒');
          
     }
};

module.exports = { conectDDBB };
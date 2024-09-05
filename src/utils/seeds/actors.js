const mongoose = require("mongoose");

const Actor = require('../../api/models/actors');
const actors = require('../../data/actors');




const upSeed = async () => {

     try {

          await mongoose.connect("mongodb+srv://jmanul77:7HUBB2D5pNbCBjee@cluster0.s7uco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

          await Actor.collection.drop();
          console.log("delete actors");

          await Actor.insertMany(actors);
          console.log("insert actors");

          await mongoose.disconnect();
          console.log("disconect");

     } catch (error) {

          console.log(error);

     }
}



upSeed(); 
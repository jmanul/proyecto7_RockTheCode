const mongoose = require("mongoose");

const Character = require('../../api/models/characters');
const characters = require("../../data/characters");




const upSeed = async () => {

     try {

          await mongoose.connect("mongodb+srv://jmanul77:7HUBB2D5pNbCBjee@cluster0.s7uco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

          await Character.collection.drop();
          console.log("delete seasons");

          await Character.insertMany(characters);
          console.log("insert seasons");

          await mongoose.disconnect();
          console.log("disconect");

     } catch (error) {

          console.log(error);

     }
}



upSeed();
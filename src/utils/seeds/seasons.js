
const mongoose = require("mongoose");

const Season = require('../../api/models/seasons');
const seasons = require('../../data/seasons');




const upSeed = async () => {

     try {

          await mongoose.connect("mongodb+srv://jmanul77:7HUBB2D5pNbCBjee@cluster0.s7uco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

          await Season.collection.drop();
          console.log("delete seasons");

          await Season.insertMany(seasons);
          console.log("insert seasons");

          await mongoose.disconnect();
          console.log("disconect");

     } catch (error) {

          console.log(error);

     }
}



upSeed();



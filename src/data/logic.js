const mongoose = require("mongoose");


const upSeed = async (model, collectionDate) => {

     try {

          await mongoose.connect("mongodb+srv://jmanul77:7HUBB2D5pNbCBjee@cluster0.s7uco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

          await model.collection.drop();
          console.log("delete seasons");

          await model.insertMany(collectionDate);
          console.log("insert seasons");

          await mongoose.disconnect();
          console.log("disconect");

     } catch (error) {

          console.log(error);

     }
}




module.exports = upSeed;
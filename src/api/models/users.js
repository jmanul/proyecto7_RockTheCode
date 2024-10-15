const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({

     userName: { type: String, required: true, unique:true, trim: true },
     password: { type: String, required: true, trim: true },
     roll: [{ type: String, required: true, enum: ["user", "administrator"],trim: true}],
     vehicles: [{ type: mongoose.Types.ObjectId, ref: 'vehicles', required: false}]
    
},
     {
          timestamps: true,
          collection: 'users'
     });

userSchema.pre("save", function () {
          
     this.password = bcrypt.hashSync(this.password, 10);
});


const User = mongoose.model('users', userSchema, 'users');

module.exports = User;
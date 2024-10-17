
const User = require("../models/users");

const bcrypt = require('bcrypt');
const { generateToken } = require("../../utils/jwt/jwt.js");



const register = async (req, res, next) => {

     try {
          const { userName, password } = req.body;

          const existingUser = await User.findOne({ userName });
          if (existingUser) {
               return res.status(400).json({ message: 'El nombre de usuario ya existe' });
          }

          const hashedPassword = bcrypt.hashSync(password, 10); 

          const newUser = new User({
               userName,
               password: hashedPassword,
               role: 'user'
          });


          const savedUser = await newUser.save();

          res.status(201).json({ message: 'Usuario registrado exitosamente', user: savedUser });

     } catch (error) {
        
          res.status(500).json({ message: 'Error en el registro', error });
     }


};

const login = async (req, res, next) => {
     try {
          const { userName, password } = req.body;

          // Buscar al usuario por userName 

          const user = await User.findOne({ userName });

          if (!user) {
               return res.status(400).json({ message: 'Usuario o contraseña incorrecta' });
          }

          // Comparar la contraseña
          const isPasswordValid = bcrypt.compareSync(password, user.password);
          if (!isPasswordValid) {
               return res.status(400).json({ message: 'Usuario o contraseña incorrecta' });
          }

          // Generar el token JWT
          const token = generateToken(user._id);

          // Enviar la respuesta exitosa con el token y los datos del usuario (sin la contraseña)
          const { password: userPassword, ...userWithoutPassword } = user._doc;
          return res.status(200).json({
               message: 'Autenticación exitosa',
               token,
               user: userWithoutPassword
          });

     } catch (error) {
          return res.status(500).json({ message: 'Error en la autenticación', error });
     }
};


module.exports = {

     register,
     login,
};


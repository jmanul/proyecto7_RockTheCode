
const idAuth = (req, res, next) => {
     try {
          const { roll, _id } = req.user;
          const { id: userId } = req.params;

          // Si es administrador, tiene acceso a todos los usuarios
          if (roll === 'administrator') {
               return next();
          }

          // Si es un usuario user y el ID coincide con su propio ID, permite acceso
          if (roll === 'user' && _id.toString() === userId) {
               return next(); // Permitir acceso a la ruta
          }

          // Si no es admin ni está consultando su propio ID, denegar acceso

          return res.status(403).json({ message: 'Acceso denegado' });

     } catch (error) {

          return res.status(500).json({ message: 'Error en la autorización', error });
     }
};


module.exports = { idAuth };
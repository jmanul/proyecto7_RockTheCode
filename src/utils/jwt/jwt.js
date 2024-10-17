

const jwt = require("jsonwebtoken");

const generateToken = (id) => {

     return jwt.sign({ id }, process.env.KEY_SECRET, { expiresIn: '1h' });
}

const verifyToken = (token) => { 

     return jwt.verify(token, process.env.KEY_SECRET);
};

module.exports = {generateToken, verifyToken}; 
require('dotenv').config(); 
const express = require('express');
const { conectDDBB } = require('./src/config/db');

const app = express();

conectDDBB();




app.use('*', (req, res, next) => { 

     return res.status(404).json('route not found 🙃');
});

app.listen('2020', () => {
     
     console.log('listening on port http://localhost:2020 👽');
})
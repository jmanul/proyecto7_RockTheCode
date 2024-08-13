
require('dotenv').config();
const express = require('express');
const { connectDDBB } = require('./src/config/db');



const app = express();

connectDDBB();




app.use('*', (req, res, next) => {

     return res.status(404).json('not found 🙃');
});


app.listen(8080, () => {

     console.log('server listening on port:http://localhost:8080 👽');
});
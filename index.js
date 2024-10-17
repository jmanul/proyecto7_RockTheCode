require('dotenv').config(); 
const express = require('express');
const { conectDDBB } = require('./src/config/db');
 
const piecesRouter = require('./src/api/routes/pieces');
const servicesRouter = require('./src/api/routes/services');
const usersRouter = require('./src/api/routes/users');
const vehiclesRouter = require('./src/api/routes/vehicles');
const registerRouter = require('./src/api/routes/register');

 const app = express();

 app.use(express.json());

 conectDDBB();


app.use('/api/v1/pieces', piecesRouter);
app.use('/api/v1/services', servicesRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/vehicles', vehiclesRouter);
app.use('/api/v1/register', registerRouter);

app.use('*', (req, res, next) => { 

     return res.status(404).json('route not found 👽');
});

app.listen('3000', () => {
     
     console.log('listening on port http://localhost:3000 🤖🤖🤖');
})
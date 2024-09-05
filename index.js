require('dotenv').config(); 
const express = require('express');
const { conectDDBB } = require('./src/config/db');
const charactersRouter = require('./src/api/routes/characters');
const actorsRouter = require('./src/api/routes/actors');const seasonsRouter = require('./src/api/routes/seasons');

const app = express();

app.use(express.json());

conectDDBB();


app.use('/api/v1/characters', charactersRouter);
app.use('/api/v1/actors', actorsRouter);
app.use('/api/v1/seasons', seasonsRouter);

app.use('*', (req, res, next) => { 

     return res.status(404).json('route not found 🙃');
});

app.listen('3000', () => {
     
     console.log('listening on port http://localhost:3000 👽');
})
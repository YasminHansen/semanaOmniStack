const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');

const routes = express.Router();


routes.post('/sessions', SessionController.create);


/// Lista ongs
routes.get('/ongs', OngController.index); 
/// Cadastra ong
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

/// Lista incidents
routes.get('/incidents', IncidentsController.index);
/// Cria um incident
routes.post('/incidents', IncidentsController.create);
/// Deletaum incident
routes.delete('/incidents', IncidentsController.delete);
module.exports = routes;
const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/ongs', OngController.list)
routes.get('/incidents', IncidentController.list)
routes.get('/profile', ProfileController.list)

routes.post('/ongs', OngController.create)
routes.post('/incidents', IncidentController.create)
routes.post('/sessions', SessionController.create)

routes.delete('/incidents/:id', IncidentController.delete)
routes.delete('/sessions', SessionController.delete)

module.exports = routes;
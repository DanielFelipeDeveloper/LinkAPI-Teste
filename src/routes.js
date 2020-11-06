const express = require('express');

const opportunitiesController = require('./controllers/opportunitiesController');

const routes = express.Router()

routes.get('/opportunities', opportunitiesController.index)
routes.get('/opportunities/client', opportunitiesController.indexClient);
routes.get('/opportunities/:clientName', opportunitiesController.findClient);

module.exports = routes;
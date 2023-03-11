const express = require('express');
const mercadolibre_routes_access = require('./mercadolibre.routes');
const routes = express.Router();

const app_routes_system = (app) => {
    app.use("/api/v1", routes);
    routes.use("/mercadolibre", mercadolibre_routes_access);   
};

module.exports = app_routes_system;

const express = require('express');
const mercadolibre_model = require('../models/mercadolibre.model');
const mercadolibre_routes_http = express.Router();

mercadolibre_routes_http.post("/", (req, res) => {
    const new_pedido = mercadolibre_model(req.body);
    new_pedido
       .save()
       .then((data) => res.json(data)) 
       .catch((err) => res.json({ message: err}));
});
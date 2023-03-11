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
mercadolibre_routes_http.get("/", (req, res) => {
    mercadolibre_model
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));

});
mercadolibre_routes_http.get("/:pedidoId", (req, res) => {
    const { pedidoId } = req.params;
    mercadolibre_model
        .findById({_id: pedidoId})
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));
});
mercadolibre_routes_http.put("/:pedidoId", (req, res) => {
    const { pedidoId } = req.params;
    const { nombre_cliente, identificacion, numero_factura, direccion, pedido, valor, proveedor, fecha_emision, correo_electronico, telefono, subtotal, impuesto, total, Metodo_pago
    } = req.body;
    mercadolibre_model
        .updateOne(
            {_id: pedidoId},
            {$set: {nombre_cliente, identificacion, numero_factura, direccion, pedido, valor, proveedor, fecha_emision, correo_electronico, telefono, subtotal, impuesto, total, Metodo_pago}}
        )
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));
});
mercadolibre_routes_http.delete("/:pedidoId", (req, res) => {
    const { pedidoId } = req.params;
    mercadolibre_model
        .deleteOne({_id: pedidoId})
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));
});
mercadolibre_routes_http.delete("/", (req ,res) => {
    const query = { mercadolibre: { $regex: "Televisor"}};
    mercadolibre_model
        .deleteMany(query)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));
});

module.exports = mercadolibre_routes_http;
const mongoose = require("mongoose");
const mercadolibre_schema = mongoose.Schema({
    nombre_cliente: {type: String, require: true},
    identificacion: {type: String, require: true, unique: true},
    numero_factura: {type: String, require: true, unique: true},
    direccion: {
        type: Object, 
        require: true,
        ciudad:{ type: String, require: true},
        code_zip:{ type: String, require: true},
    },
    pedido: { type: String, require: true},
    valor: {type: Number, require: true},
    proveedor: { type: String, require: true},
    feha_emision: {type: Date, require: true},
    correo_electronico: {type: String, require: true},
    telefono: {type:string, require: true},
    subtotal: {type: Number, require: true},
    impuesto: {type: Number, require: true},
    total: {type: Number, require: true},
    Metodo_pago: {
        type: object, 
        require: true,
        credito: { 
            type: Object, 
            require: true,
            banco: { type: String, require: true},
            cuotas: {type: Number, require: true},
            Fecha_Vencimiento_tarjeta: { type: Date , require: true},
        },
        pse: { type: Number, require: true},
        efectivamente: {type: String , require: true}
    },
});
module.exports = mongoose.model("MercadoLibreCollection", mercadolibre_schema);

const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
    usuarioId: { type: String, unique: true,required: true},
    productos: [{ 
        producto: {type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true},
        cantidad: { type: Number, required: true}
    }],
    fechaActualizacion: { type: Date, default: Date.now},
   
});

module.exports = mongoose.model('Carrito',carritoSchema)
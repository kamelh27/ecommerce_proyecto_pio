const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true},
    descripcion: { type: String, required: true},
    fechaGreacion: { type: Date, default: Date.now},
});

module.exports = mongoose.model('Categoria', CategoriaSchema)
const express = require('express');
const router = express.Router();
const controladorProducto = require('../controladores/controladorProducto');

router.post('/', controladorProducto.crearProducto);
router.get('/', controladorProducto.obtenerProducto);
router.put('/:id', controladorProducto.actualizarProducto);
router.delete('/:id', controladorProducto.eliminarProducto);

module.exports = router;
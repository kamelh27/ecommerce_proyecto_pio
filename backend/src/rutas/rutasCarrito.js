const express = require('express');
const router = express.Router()
const controladorCarrito = require('../controladores/controladorCarrito');

// Para no sql

// router.post('/', controladorCarrito.crearCarrito);
// router.get('/', controladorCarrito.obtenerCarrito);
// router.put('/:id', controladorCarrito.actualizarCarrito);
// router.delete('/:id', controladorCarrito.eliminarCarrito);

router.post('/', controladorCarrito.crearCarrito);
router.get('/:usuarioId', controladorCarrito.obtenerCarrito);
router.put('/actualizar', controladorCarrito.actualizarCarrito);
router.delete('/vaciar/:usuarioId', controladorCarrito.eliminarCarrito);


module.exports = router;
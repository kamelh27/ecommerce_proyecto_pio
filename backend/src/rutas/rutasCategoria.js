const express = require('express');
const router = express.Router()
const controladorCategoria = require('../controladores/controladorCategoria');

router.post('/', controladorCategoria.crearCategoria);
router.get('/:id', controladorCategoria.obtenerCategoria);
router.put('/:id', controladorCategoria.actualizarCategoria);
router.delete('/:id', controladorCategoria.eliminarCategoria);

module.exports = router;
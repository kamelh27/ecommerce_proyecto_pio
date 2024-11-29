const Producto = require('../modelos/productos');

exports.crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body)
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear al crear el producto', error: error.message })
    }
}

exports.obtenerProducto = async (req, res) => {
    try {
        const producto = await Producto.find().populate('categoria');
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el producto', error: error.message });
    }
}

exports.actualizarProducto = async (req, res) => {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json(productoActualizado)
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el producto', error: error.message });
    };
};

exports.eliminarProducto = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'Producto eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el producto', error: error.message })
    }
}
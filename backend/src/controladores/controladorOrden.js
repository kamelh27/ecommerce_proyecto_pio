const Orden = require('../modelos/orden');
const Carrito = require('../modelos/carrito')

exports.crearOrdenDesdeCarrito = async (req, res) => {
    const { usuarioId } = req.params;
    try {
        const carrito = await Carrito.findOne({
            usuarioId: usuarioId
        }).populate('productos.producto');
        if (!carrito) {
            return res.status(404).json({ mensaje: ' Carrito no encontrado' })
        }
        let total = 0;
        const productosOrden = carrito.productos.map(item => {
            const precio = item.producto.precio * item.cantidad
            total += precio
            return {
                producto: item.producto,
                cantidad: item.cantidad,
                precio: precio
            };
        });
        const nuevaOrden = new Orden({
            usuarioId: usuarioId,
            carritoId: carrito._id,
            productos: productosOrden,
            total: total
        })
        await Carrito.findOneAndUpdate({ usuarioId: usuarioId }, {productos: []})
        res.status(201).json({ mensaje: 'Orden creada con exito', orden: nuevaOrden});
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear la orden', error: error.message });
    };
};

exports.obtenerOrden = async (req, res) => {
    const { usuarioId, ordenId } = req.params;
    try {
        const orden = await Orden.findOne({ _id: ordenId, usuarioId: usuarioId}).populate('productos.producto');
        if(!orden) {
            return res.status(404).json({ mensaje: 'Orden no encontrada'})
        }
        res.status(200).json(orden);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la orden', error: error.message });
    };
};

// Revisar no se ve el codeshare

// exports.actualizarOrden = async (req, res) => {
//     try {
//         const ordenActualizada = await Orden.findByIdAndUpdate(req.params.id, req.body, {
//             new: true
//         });
//         res.status(200).json(ordenActualizada);
//     } catch (error) {
//         res.status(500).json({ mensaje: 'Error al actualizar la orden', error: error.message });
//     };
// };

// exports.eliminarOrden = async (req, res) => {
//     try {
//         await Orden.findByIdAndDelete(req.params.id);
//         res.status(200).json({ mensaje: 'Orden eliminada exitosamente' })
//     } catch (error) {
//         res.status(500).json({ mensaje: 'Error al eliminar la orden', error: error.message })
//     };
// };
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carritoController = void 0;
const carrito_1 = require("../persistencia/carrito");
class Carrito {
    getCarrito(req, res) {
        const id = Number(req.params.id);
        if (id) {
            const carrito = carrito_1.carritoPersistencia.get(id);
            console.log(carrito);
            if (!carrito)
                return res.status(404).json({
                    msg: "Producto no encontrado"
                });
            return res.json({
                data: carrito
            });
        }
        res.json({
            data: carrito_1.carritoPersistencia.get(),
        });
    }
}
exports.carritoController = new Carrito();

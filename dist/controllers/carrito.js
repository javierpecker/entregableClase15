"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carritoController = void 0;
const carrito_1 = require("../persistencia/carrito");
class Carrito {
    getCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            if (id) {
                const carrito = yield carrito_1.carritoPersistencia.get(id);
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
                data: yield carrito_1.carritoPersistencia.get(),
            });
        });
    }
}
exports.carritoController = new Carrito();

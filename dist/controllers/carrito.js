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
const productos_1 = require("..//persistencia/productos");
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
    // checkAddProducts(req: Request, res: Response, next: NextFunction) {
    //   const {nombre, precio} = req.body
    //   if(!nombre || !precio || typeof nombre !== 'string' || isNaN(precio)){
    //     return res.status(400).json({
    //       msg: "Campos del body invalidos"
    //     })
    //   }
    //   next();
    // }
    addCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const newItem = yield carrito_1.carritoPersistencia.add(2, id);
            res.json({
                msg: "producto agregado con exito al carrito",
                data: newItem
            });
        });
    }
    deleteCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const checkProducto = yield productos_1.productsPersistencia.find(id);
            console.log(checkProducto);
            if (checkProducto < 0) {
                return res.status(404).json({
                    msg: "producto not found",
                });
            }
            else {
                yield carrito_1.carritoPersistencia.delete(2, id);
                res.json({
                    msg: "respuesta",
                });
            }
        });
    }
}
exports.carritoController = new Carrito();

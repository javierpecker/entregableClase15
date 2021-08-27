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
exports.productsController = void 0;
const productos_1 = require("../persistencia/productos");
class Producto {
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            if (id) {
                const producto = yield productos_1.productsPersistencia.get(id);
                console.log(producto);
                if (!producto)
                    return res.status(404).json({
                        msg: "Producto no encontrado"
                    });
                return res.json({
                    data: producto
                });
            }
            res.json({
                data: yield productos_1.productsPersistencia.get(undefined),
            });
        });
    }
    checkAddProducts(req, res, next) {
        const { nombre, precio } = req.body;
        if (!nombre || !precio || typeof nombre !== 'string' || isNaN(precio)) {
            return res.status(400).json({
                msg: "Campos del body invalidos"
            });
        }
        next();
    }
    addProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newItem = yield productos_1.productsPersistencia.add(req.body);
            res.json({
                msg: "producto agregado con exito",
                data: newItem
            });
        });
    }
}
exports.productsController = new Producto();

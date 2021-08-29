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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carritoPersistencia = void 0;
const moment_1 = __importDefault(require("moment"));
const path_1 = __importDefault(require("path"));
const filesystem_1 = require("./filesystem");
const productos_1 = require("..//persistencia/productos");
const carritofile = path_1.default.resolve(__dirname, './../../file/carrito.json');
const productosfile = path_1.default.resolve(__dirname, './../../file/productos.json');
let setTime = moment_1.default(new Date()).format("DD/MM/YYYY HH:MM:SS");
let carrito = [];
class Carritos {
    find(id = undefined) {
        return carrito.findIndex(aProduct => aProduct.id == Number(id));
    }
    get(id = undefined) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                const readCarrito = yield filesystem_1.readFile(carritofile);
                carrito = JSON.parse(readCarrito);
                return carrito.filter(aCart => aCart.id == id);
            }
            const readCarrito = yield filesystem_1.readFile(carritofile);
            carrito = JSON.parse(readCarrito);
            return carrito;
        });
    }
    add(idcarrito, id) {
        return __awaiter(this, void 0, void 0, function* () {
            carrito = yield this.get(idcarrito);
            const infoProducto = yield productos_1.productsPersistencia.get(id);
            carrito[0].productos.push(infoProducto[0]);
            const tmpCarrito = JSON.stringify(carrito, null, '\t');
            yield filesystem_1.writeFile(tmpCarrito, carritofile);
            return carrito;
        });
    }
    delete(idcarrito, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tmpCarrito = yield this.get(idcarrito);
            //console.log(tmpCarrito)
            const myCarrito = tmpCarrito[0].productos.filter(aProduct => aProduct.id !== Number(id));
            tmpCarrito[0].productos = myCarrito;
            console.log(tmpCarrito[0].productos);
            const tmp = JSON.stringify(tmpCarrito, null, '\t');
            yield filesystem_1.writeFile(tmp, carritofile);
        });
    }
}
exports.carritoPersistencia = new Carritos();

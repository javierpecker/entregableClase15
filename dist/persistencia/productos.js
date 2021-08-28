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
exports.productsPersistencia = void 0;
const moment_1 = __importDefault(require("moment"));
const path_1 = __importDefault(require("path"));
const filesystem_1 = require("./filesystem");
const productosfile = path_1.default.resolve(__dirname, './../../file/productos.json');
console.log(productosfile);
let setTime = moment_1.default(new Date()).format("DD/MM/YYYY HH:MM:SS");
let productos = [];
class Productos {
    find(id = undefined) {
        return __awaiter(this, void 0, void 0, function* () {
            let arrayproductos = yield this.get();
            return arrayproductos.findIndex(aProduct => aProduct.id == Number(id));
        });
    }
    get(id = undefined) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                const read = yield filesystem_1.readFile(productosfile);
                productos = JSON.parse(read);
                return productos.filter(aProduct => aProduct.id == id);
            }
            const read = yield filesystem_1.readFile(productosfile);
            productos = JSON.parse(read);
            return productos;
        });
    }
    add(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newItem = {
                id: productos.length + 1,
                timestamp: setTime,
                nombre: data.nombre,
                descripcion: data.descripcion,
                codigo: data.codigo,
                foto: data.foto,
                precio: data.precio,
                stock: data.stock,
            };
            console.log(newItem);
            const arrayString = JSON.stringify(productos, null, '\t');
            yield filesystem_1.writeFile(arrayString, productosfile);
            productos.push(newItem);
            return newItem;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            let findPrd = yield this.find(id);
            console.log(findPrd);
            if (id < 0 || id > productos.length || isNaN(id)) {
                return "Id invalido";
            }
            else {
                const newItem = {
                    id: id,
                    timestamp: setTime,
                    nombre: data.nombre,
                    descripcion: data.descripcion,
                    codigo: data.codigo,
                    foto: data.foto,
                    precio: data.precio,
                    stock: data.stock,
                };
                productos.splice(Number(findPrd), 1, newItem);
                const arrayString = JSON.stringify(productos, null, '\t');
                yield filesystem_1.writeFile(arrayString, productosfile);
                return newItem;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id < 0 || id > productos.length || isNaN(id)) {
                return "Id invalido";
            }
            else {
                productos = productos.filter(aProduct => aProduct.id !== Number(id));
                const arrayString = JSON.stringify(productos, null, '\t');
                yield filesystem_1.writeFile(arrayString, productosfile);
                return "producto eliminado";
            }
        });
    }
}
exports.productsPersistencia = new Productos();

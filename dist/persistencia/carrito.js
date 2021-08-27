"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carritoPersistencia = void 0;
const moment_1 = __importDefault(require("moment"));
let setTime = moment_1.default(new Date()).format("DD/MM/YYYY HH:MM:SS");
let carrito = [
    {
        "id": 1,
        "timestamp": "26/08/2021 12:08:22",
        "productos": [
            { id: 1, timestamp: "26/08/2021 12:08:22", nombre: "lapiz", descripcion: "sirve para escribir", codigo: 123123, foto: "https://", precio: 200, stock: 3 },
            { id: 2, timestamp: "26/08/2021 13:08:74", nombre: "cartuchera", descripcion: "sirve para guardar utiles", codigo: 3333, foto: "https://", precio: 230, stock: 3 },
            { id: 3, timestamp: "26/08/2021 15:08:15", nombre: "goma", descripcion: "sirve para borrar", codigo: 12313323, foto: "https://", precio: 110, stock: 3 },
        ],
    },
    {
        "id": 2,
        "timestamp": "26/08/2021 12:08:22",
        "productos": [
            { id: 1, timestamp: "26/08/2021 12:08:22", nombre: "regla", descripcion: "sirve para escribir", codigo: 123123, foto: "https://", precio: 200, stock: 3 },
            { id: 2, timestamp: "26/08/2021 13:08:74", nombre: "birome", descripcion: "sirve para guardar utiles", codigo: 3333, foto: "https://", precio: 230, stock: 3 },
            { id: 3, timestamp: "26/08/2021 15:08:15", nombre: "sacapuntas", descripcion: "sirve para borrar", codigo: 12313323, foto: "https://", precio: 110, stock: 3 },
        ],
    },
];
// interface addProduct {
//   timestamp: string,
//   nombre: string, 
//   precio: number,
//   descripcion: string,
//   codigo: number,
//   foto: string,
//   stock: number,
// }
// interface Product {
//   id: number,
//   nombre: string, 
//   precio: number,
//   descripcion: string,
//   codigo: number,
//   foto: string,
//   stock: number,
//   timestamp: string,
// }
class Carritos {
    find(id = undefined) {
        return carrito.findIndex(aProduct => aProduct.id == Number(id));
    }
    get(id = undefined) {
        if (id) {
            return carrito.filter(aProduct => aProduct.id == id);
        }
        return carrito;
    }
}
exports.carritoPersistencia = new Carritos();

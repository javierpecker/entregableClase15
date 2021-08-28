import moment from "moment";
import path from 'path';
import { readFile, writeFile } from './filesystem'
import {productsPersistencia} from '..//persistencia/productos';

const carritofile : string = path.resolve(__dirname, './../../file/carrito.json');
const productosfile : string = path.resolve(__dirname, './../../file/productos.json');

let setTime : string = moment(new Date()).format("DD/MM/YYYY HH:MM:SS");
let carrito : any[] = [];


// let carrito = [
//   { 
//   "id": 1, 
//   "timestamp": "26/08/2021 12:08:22",
//   "productos": [
//   {id:1, timestamp: "26/08/2021 12:08:22", nombre: "lapiz", descripcion: "sirve para escribir", codigo: 123123, foto: "https://", precio:200, stock: 3},
//   {id:2, timestamp: "26/08/2021 13:08:74", nombre: "cartuchera", descripcion: "sirve para guardar utiles", codigo: 3333, foto: "https://", precio:230, stock: 3},
//   {id:3, timestamp: "26/08/2021 15:08:15", nombre: "goma", descripcion: "sirve para borrar", codigo: 12313323, foto: "https://", precio:110, stock: 3},],
// },
// { 
//   "id": 2, 
//   "timestamp": "26/08/2021 12:08:22",
//   "productos": [
//   {id:1, timestamp: "26/08/2021 12:08:22", nombre: "regla", descripcion: "sirve para escribir", codigo: 123123, foto: "https://", precio:200, stock: 3},
//   {id:2, timestamp: "26/08/2021 13:08:74", nombre: "birome", descripcion: "sirve para guardar utiles", codigo: 3333, foto: "https://", precio:230, stock: 3},
//   {id:3, timestamp: "26/08/2021 15:08:15", nombre: "sacapuntas", descripcion: "sirve para borrar", codigo: 12313323, foto: "https://", precio:110, stock: 3},],
// },
// ]

interface Cart {
  id: number,
  timestamp: string,
  productos: any [],
  
}

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

    find(id: number | undefined = undefined) {
      return  carrito.findIndex(aProduct => aProduct.id == Number(id))
    }
    
    async get(id: number | undefined = undefined){
      if(id){
        const readCarrito: any = await readFile(carritofile);
        carrito = JSON.parse(readCarrito);
        return carrito.filter(aCart => aCart.id == id)
      }
      const readCarrito: any = await readFile(carritofile);
      carrito = JSON.parse(readCarrito);
      return carrito;
    }
  
    async add(idcarrito : number ,  id : number){

      carrito = await this.get(1);
      const infoProducto : any [] = await productsPersistencia.get(id);
      carrito[0].productos.push(infoProducto[0])
      const tmpCarrito = JSON.stringify(carrito, null, '\t')
      await writeFile(tmpCarrito, carritofile)
      return carrito

      
    }
  
  
    // delete(id: number){
    //   productos = productos.filter(aProduct => aProduct.id !== Number(id))
    //   return productos;
    // }
  }
  
  export const carritoPersistencia = new Carritos();
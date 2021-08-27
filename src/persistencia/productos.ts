import moment from "moment";
import path from 'path';
import { readFile, writeFile } from './filesystem'

const productosfile : string = path.resolve(__dirname, './../../file/productos.json')
console.log(productosfile)
let setTime : string = moment(new Date()).format("DD/MM/YYYY HH:MM:SS");
let productos : any[] = [];
// let productos = [
//   {id:1, timestamp: "26/08/2021 12:08:22", nombre: "lapiz", descripcion: "sirve para escribir", codigo: 123123, foto: "https://", precio:200, stock: 3},
//   {id:2, timestamp: "26/08/2021 13:08:74", nombre: "cartuchera", descripcion: "sirve para guardar utiles", codigo: 3333, foto: "https://", precio:230, stock: 3},
//   {id:3, timestamp: "26/08/2021 15:08:15", nombre: "goma", descripcion: "sirve para borrar", codigo: 12313323, foto: "https://", precio:110, stock: 3},
// ]

interface addProduct {
  timestamp: string,
  nombre: string, 
  precio: number,
  descripcion: string,
  codigo: number,
  foto: string,
  stock: number,
}

interface Product {
  id: number,
  nombre: string, 
  precio: number,
  descripcion: string,
  codigo: number,
  foto: string,
  stock: number,
  timestamp: string,
}

class Productos {

  find(id: number | undefined = undefined) {
    //console.log(productos.findIndex((aProduct) => aProduct.id == Number(id)))
    return  productos.findIndex(aProduct => aProduct.id == Number(id))
  }
  
  async get(id: number | undefined = undefined){
    if(id){
      const read: any = await readFile(productosfile);
      productos = JSON.parse(read);
      console.log(productos)
      return productos.filter(aProduct => aProduct.id == id)
    }
    if(undefined){
    const read: any = await readFile(productosfile);
    console.log(productosfile);
    console.log(read)
    productos = JSON.parse(read);
    console.log(productos)
    return productos;}
  }

  // add(data: addProduct){

  //   const newItem = {
  //     id: productos.length +1,
  //     timestamp: setTime,
  //     nombre: data.nombre,
  //     descripcion: data.descripcion,
  //     codigo: data.codigo,
  //     foto: data.foto,
  //     precio: data.precio,
  //     stock: data.stock,
  //   }
  //   console.log(newItem)
  //   productos.push(newItem);

  //   return newItem;
  // }

  // update(id: number, data: addProduct) {
  //     let findPrd = this.find(id)
  //     productos = this.get()
  //     const newItem: Product = {
  //       id: id,
  //       timestamp: setTime,
  //       nombre: data.nombre,
  //       descripcion: data.descripcion,
  //       codigo: data.codigo,
  //       foto: data.foto,
  //       precio: data.precio,
  //       stock: data.stock,
  //     }
  //     productos.splice(Number(findPrd), 1, newItem);
  //     return newItem
  // }

  // delete(id: number){
  //   productos = productos.filter(aProduct => aProduct.id !== Number(id))
  //   return productos;
  // }
}

export const productsPersistencia = new Productos();
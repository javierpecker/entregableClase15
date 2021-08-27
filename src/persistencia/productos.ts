import moment from "moment";
import path from 'path';
import { readFile, writeFile } from './filesystem'

const productosfile : string = path.resolve(__dirname, './../../file/productos.json')
console.log(productosfile)
let setTime : string = moment(new Date()).format("DD/MM/YYYY HH:MM:SS");
let productos : any[] = [];

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
    return  productos.findIndex(aProduct => aProduct.id == Number(id))
  }
  
  async get(id: number | undefined = undefined){
    if(id){
      const read: any = await readFile(productosfile);
      productos = JSON.parse(read);
      console.log(productos)
      return productos.filter(aProduct => aProduct.id == id)
    }
    const read: any = await readFile(productosfile);
    productos = JSON.parse(read);
    return productos;
  }

  async add(data: Product){
    
    const newItem = {
      id: productos.length +1,
      timestamp: setTime,
      nombre: data.nombre,
      descripcion: data.descripcion,
      codigo: data.codigo,
      foto: data.foto,
      precio: data.precio,
      stock: data.stock,
    }
    console.log(newItem)
    const arrayString = JSON.stringify(productos, null, '\t')
    await writeFile(arrayString, productosfile)
    productos.push(newItem);
    return newItem;
  }

  async update(id: number, data: addProduct) {
      let findPrd = await this.find(id)
      productos = await this.get()
      const newItem: Product = {
        id: id,
        timestamp: setTime,
        nombre: data.nombre,
        descripcion: data.descripcion,
        codigo: data.codigo,
        foto: data.foto,
        precio: data.precio,
        stock: data.stock,
      }
      productos.splice(Number(findPrd), 1, newItem);
      return newItem
  }

  // delete(id: number){
  //   productos = productos.filter(aProduct => aProduct.id !== Number(id))
  //   return productos;
  // }
}

export const productsPersistencia = new Productos();
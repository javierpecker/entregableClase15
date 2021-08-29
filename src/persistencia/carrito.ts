import moment from "moment";
import path from 'path';
import { readFile, writeFile } from './filesystem'
import {productsPersistencia} from '..//persistencia/productos';

const carritofile : string = path.resolve(__dirname, './../../file/carrito.json');
const productosfile : string = path.resolve(__dirname, './../../file/productos.json');

let setTime : string = moment(new Date()).format("DD/MM/YYYY HH:MM:SS");
let carrito : any[] = [];



interface Cart {
  id: number,
  timestamp: string,
  productos: any [],
  
}


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

      carrito = await this.get(idcarrito);
      const infoProducto : any [] = await productsPersistencia.get(id);
      carrito[0].productos.push(infoProducto[0])
      const tmpCarrito = JSON.stringify(carrito, null, '\t')
      await writeFile(tmpCarrito, carritofile)
      return carrito

      
    }
  
  
    async delete(idcarrito : number , id: number){

      const tmpCarrito = await this.get(idcarrito);
      //console.log(tmpCarrito)
      const myCarrito = tmpCarrito[0].productos.filter(aProduct => aProduct.id  !== Number(id))
      tmpCarrito[0].productos = myCarrito;
      console.log(tmpCarrito[0].productos)
      const tmp = JSON.stringify(tmpCarrito, null, '\t');
      await writeFile(tmp, carritofile);
      

    }
  }
  
  export const carritoPersistencia = new Carritos();
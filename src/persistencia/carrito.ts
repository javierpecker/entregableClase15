import moment from "moment";


let setTime : string = moment(new Date()).format("DD/MM/YYYY HH:MM:SS");

let carrito = [
  { 
  "id": 1, 
  "timestamp": "26/08/2021 12:08:22",
  "productos": [
  {id:1, timestamp: "26/08/2021 12:08:22", nombre: "lapiz", descripcion: "sirve para escribir", codigo: 123123, foto: "https://", precio:200, stock: 3},
  {id:2, timestamp: "26/08/2021 13:08:74", nombre: "cartuchera", descripcion: "sirve para guardar utiles", codigo: 3333, foto: "https://", precio:230, stock: 3},
  {id:3, timestamp: "26/08/2021 15:08:15", nombre: "goma", descripcion: "sirve para borrar", codigo: 12313323, foto: "https://", precio:110, stock: 3},],
},
{ 
  "id": 2, 
  "timestamp": "26/08/2021 12:08:22",
  "productos": [
  {id:1, timestamp: "26/08/2021 12:08:22", nombre: "regla", descripcion: "sirve para escribir", codigo: 123123, foto: "https://", precio:200, stock: 3},
  {id:2, timestamp: "26/08/2021 13:08:74", nombre: "birome", descripcion: "sirve para guardar utiles", codigo: 3333, foto: "https://", precio:230, stock: 3},
  {id:3, timestamp: "26/08/2021 15:08:15", nombre: "sacapuntas", descripcion: "sirve para borrar", codigo: 12313323, foto: "https://", precio:110, stock: 3},],
},
]

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

    find(id: number | undefined = undefined) {
      return  carrito.findIndex(aProduct => aProduct.id == Number(id))
    }
    
    get(id: number | undefined = undefined){
      if(id){
        return carrito.filter(aProduct => aProduct.id == id)
      }
      return carrito;
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
  
  export const carritoPersistencia = new Carritos();
import {Request, Response, NextFunction} from 'express';
import {carritoPersistencia} from '../persistencia/carrito';

class Carrito {

  async getCarrito (req : Request, res : Response) {
    const id = Number(req.params.id);

    if(id){
      const carrito = await carritoPersistencia.get(id);
      console.log(carrito);

      if(!carrito)
        return res.status(404).json({
          msg: "Producto no encontrado"
        })
    
      return res.json({
        data: carrito
      })
    }

    res.json({
      data: await carritoPersistencia.get(),
    })
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

  // addProducts (req : Request, res : Response) {
  //   const newItem = productsPersistencia.add(req.body);

  //   res.json({
  //     msg: "producto agregado con exito",
  //     data: newItem
  //   })
  // }

  // updateProducts (req : Request, res : Response) {
  //   const id = Number(req.params.id);

  //   // const producto = productsPersistencia.find(id);

  //   // if(!producto){
  //   //   return res.status(404).json({
  //   //     msg: "producto not found",
  //   //   })
  //   // }
  //   const newItem = productsPersistencia.update(id, req.body);
  //   res.json({
  //     msg: "actualizando producto",
  //     data: newItem
  //   })
  // }

  // deleteProducts (req : Request, res : Response) {
  //   const id = Number(req.params.id);

  //   const producto = productsPersistencia.find(id);

  //   if(!producto){
  //     return res.status(404).json({
  //       msg: "producto not found",
  //     })
  //   }

  //   productsPersistencia.delete(id);
  //   res.json({
  //     msg: "producto borrado",
  //   })
  // }
}


export const carritoController = new Carrito();
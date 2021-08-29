import {Request, Response, NextFunction} from 'express';
import {carritoPersistencia} from '../persistencia/carrito';
import {productsPersistencia} from '..//persistencia/productos';

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

  async addCarrito (req : Request, res : Response) {
    const id : number = Number(req.params.id);

    

    const newItem = await carritoPersistencia.add(2,id);

    res.json({
      msg: "producto agregado con exito al carrito",
      data: newItem
    })
  }


  async deleteCarrito (req : Request, res : Response) {
    const id = Number(req.params.id);



    const checkProducto : Number = await productsPersistencia.find(id);
    console.log(checkProducto)

    if(checkProducto < 0){
      return res.status(404).json({
        msg: "producto not found",
      })
    }
    else{
      await carritoPersistencia.delete(2, id);
      res.json({
      msg: "respuesta",
      })
    }
  }  
}


export const carritoController = new Carrito();
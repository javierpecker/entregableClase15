import {Request, Response, NextFunction} from 'express';
import {productsPersistencia} from '../persistencia/productos';

class Producto {

  async getProducts (req : Request, res : Response) {
    const id = Number(req.params.id);

    if(id){
      const producto = await productsPersistencia.get(id);
      console.log(producto);

      if(!producto)
        return res.status(404).json({
          msg: "Producto no encontrado"
        })
    
      return res.json({
        data: producto
      })
    }

    res.json({
      data: await productsPersistencia.get(undefined),
    })
  }

  checkAddProducts(req: Request, res: Response, next: NextFunction) {
    const {nombre, precio} = req.body

    if(!nombre || !precio || typeof nombre !== 'string' || isNaN(precio)){
      return res.status(400).json({
        msg: "Campos del body invalidos"
      })
    }

    next();
  }

  async addProducts (req : Request, res : Response) {
    const newItem = await productsPersistencia.add(req.body);

    res.json({
      msg: "producto agregado con exito",
      data: newItem
    })
  }

  async updateProducts (req : Request, res : Response) {
    const id = Number(req.params.id);

    const producto = productsPersistencia.find(id);

    if(!producto){
      return res.status(404).json({
        msg: "producto not found",
      })
    }
    const newItem = await productsPersistencia.update(id, req.body);
    res.json({
      msg: "actualizando producto",
      data: newItem
    })
  }

  async deleteProducts (req : Request, res : Response) {
    const id = Number(req.params.id);

    const producto = await productsPersistencia.find(id);

    if(!producto){
      return res.status(404).json({
        msg: "producto not found",
      })
    }


    const msj = await productsPersistencia.delete(id);
    res.json({
      msg: msj
    })
  }
}


export const productsController = new Producto();
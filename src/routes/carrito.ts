import {Router} from 'express';
import { carritoController } from '../controllers/carrito';

const router = Router();

router.get("/list", carritoController.getCarrito)

router.get("/list/:id", carritoController.getCarrito)

router.post("/add/:id", carritoController.addCarrito)

// router.delete("/delete/:id", carritoController.deleteCart)


export default router;
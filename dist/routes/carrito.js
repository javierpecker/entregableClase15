"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrito_1 = require("../controllers/carrito");
const router = express_1.Router();
router.get("/list", carrito_1.carritoController.getCarrito);
router.get("/list/:id", carrito_1.carritoController.getCarrito);
// router.post("/add", carritoController.addCart)
// router.delete("/delete/:id", carritoController.deleteCart)
exports.default = router;

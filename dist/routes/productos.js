"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("../controllers/productos");
const admin_1 = require("../middleware/admin");
const router = express_1.Router();
router.get('/', productos_1.productsController.getProducts);
router.get('/:id', productos_1.productsController.getProducts);
router.post('/', admin_1.checkAdmin, productos_1.productsController.checkAddProducts, productos_1.productsController.addProducts);
// router.put('/:id',checkAdmin, productsController.updateProducts)
// router.delete('/:id',checkAdmin, productsController.deleteProducts)
exports.default = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("../controllers/productos");
const router = express_1.Router();
router.get('/', productos_1.productsController.getProducts);
router.get('/:id', productos_1.productsController.getProducts);
// router.post('/',checkAdmin,productsController.checkAddProducts, productsController.addProducts)
// router.put('/:id',checkAdmin, productsController.updateProducts)
// router.delete('/:id',checkAdmin, productsController.deleteProducts)
exports.default = router;

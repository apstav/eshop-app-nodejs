const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");
router.get("/findall", productController.findAll);
router.get("/findone/:product", productController.findOne);
router.post("/create", productController.create);
router.patch("/update", productController.update);
router.delete("/delete/:product", productController.delete);

module.exports = router;

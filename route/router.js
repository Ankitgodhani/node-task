const express = require('express');
const userController = require('../controller/userController');



const route = express.Router();

route.post("/api/product-create", userController.userProductCreate);
route.get("/api/productget", userController.productget);
route.get("/api/product-updateget/:productID", userController.ProductUpdateGet);
route.put("/api/product-update/:productID", userController.ProductUpdatePost);
route.delete("/api/product-remove/:productID", userController.productRemove);



module.exports = {
  route
}



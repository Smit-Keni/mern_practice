import express from "express";

import { createProduct, deleteProduct, getProducts, updaeProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/",getProducts)

router.post("/",createProduct);

router.delete("/:id",deleteProduct)

router.put("/:id",updaeProduct)

export default router;

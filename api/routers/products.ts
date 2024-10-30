import ProductsController from "../controllers/products";
import { Router } from "express";

const ProductsRouters = Router();

ProductsRouters.route("/").get(ProductsController.FindAll);

ProductsRouters.route("/:id").get(ProductsController.FindUnique);

ProductsRouters.route("/").post(ProductsController.Create);

ProductsRouters.route("/:id").put(ProductsController.Update);

ProductsRouters.route("/:id").delete(ProductsController.Update);

export default ProductsRouters;

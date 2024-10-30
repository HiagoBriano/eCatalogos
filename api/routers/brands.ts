import BrandsController from "../controllers/brands";
import { Router } from "express";

const BrandsRouters = Router();

BrandsRouters.route("/").get(BrandsController.FindAll);

BrandsRouters.route("/:id").get(BrandsController.FindUnique);

BrandsRouters.route("/").post(BrandsController.Create);

BrandsRouters.route("/:id").put(BrandsController.Update);

BrandsRouters.route("/:id").delete(BrandsController.Update);

export default BrandsRouters;

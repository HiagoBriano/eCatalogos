import ColorsController from "../controllers/colors";
import { Router } from "express";

const ColorsRouters = Router();

ColorsRouters.route("/").get(ColorsController.FindAll);

ColorsRouters.route("/:id").get(ColorsController.FindUnique);

ColorsRouters.route("/").post(ColorsController.Create);

ColorsRouters.route("/:id").put(ColorsController.Update);

ColorsRouters.route("/:id").delete(ColorsController.Update);

export default ColorsRouters;

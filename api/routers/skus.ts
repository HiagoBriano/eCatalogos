import SkusController from "../controllers/skus";
import { Router } from "express";

const SkusRouters = Router();

SkusRouters.route("/").get(SkusController.FindAll);

SkusRouters.route("/:id").get(SkusController.FindUnique);

SkusRouters.route("/").post(SkusController.Create);

SkusRouters.route("/:id").put(SkusController.Update);

SkusRouters.route("/:id").delete(SkusController.Update);

export default SkusRouters;

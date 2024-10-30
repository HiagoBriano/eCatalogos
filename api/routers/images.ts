import ImagesController from "../controllers/images";
import { Router } from "express";

const ImagesRouters = Router();

ImagesRouters.route("/").get(ImagesController.FindAll);

ImagesRouters.route("/:id").get(ImagesController.FindUnique);

ImagesRouters.route("/").post(ImagesController.Create);

ImagesRouters.route("/:id").put(ImagesController.Update);

ImagesRouters.route("/:id").delete(ImagesController.Update);

export default ImagesRouters;

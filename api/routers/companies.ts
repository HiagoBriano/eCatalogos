import CompaniesController from "../controllers/companies";
import { Router } from "express";

const CompaniesRouters = Router();

CompaniesRouters.route("/").get(CompaniesController.FindAll);

CompaniesRouters.route("/:id").get(CompaniesController.FindUnique);

CompaniesRouters.route("/").post(CompaniesController.Create);

CompaniesRouters.route("/:id").put(CompaniesController.Update);

CompaniesRouters.route("/:id").delete(CompaniesController.Update);

export default CompaniesRouters;

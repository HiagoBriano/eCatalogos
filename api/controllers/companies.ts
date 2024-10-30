import { CreateCompanyDTO, UpdateCompanyDTO } from "../interface/companies";
import CompaniesModel from "../models/companies";
import { Request, Response } from "express";

async function FindAll(_req: Request, res: Response) {
  const response = await CompaniesModel.FindAll();

  if (!response.success) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
  }

  return res.status(200).json({ message: null, ...response });
}

async function FindUnique(req: Request, res: Response) {
  const id = Number(req.params.id);

  const response = await CompaniesModel.FindUnique(id);

  if (!response.success) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
  }

  return res.status(200).json({ message: null, ...response });
}

async function Create(req: Request, res: Response) {
  const data: CreateCompanyDTO = req.body;

  const response = await CompaniesModel.Create(data);

  if (!response.success) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
  }

  return res.status(201).json({ message: null, ...response });
}

async function Update(req: Request, res: Response) {
  const data: UpdateCompanyDTO = req.body;

  const id = Number(req.params.id);

  const checkIfExists = await CompaniesModel.FindUnique(id);

  if (!checkIfExists.success) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
  }

  if (!checkIfExists.data) {
    return res
      .status(404)
      .json({ success: false, message: "Not found", data: null });
  }

  const response = await CompaniesModel.Update(id, data);

  if (!response.success) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
  }

  return res.status(200).json({ message: null, ...response });
}

async function Delete(req: Request, res: Response) {
  const id = Number(req.params.id);

  const checkIfExists = await CompaniesModel.FindUnique(id);

  if (!checkIfExists.success) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
  }

  if (!checkIfExists.data) {
    return res
      .status(404)
      .json({ success: false, message: "Not found", data: null });
  }

  const response = await CompaniesModel.Delete(id);

  if (!response.success) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
  }

  return res.status(200).json({ success: false, message: null, data: null });
}

const CompaniesController = {
  FindAll,
  FindUnique,
  Create,
  Update,
  Delete,
};

export default CompaniesController;

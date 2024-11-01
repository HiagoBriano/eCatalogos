import { CreateBrandDTO, UpdateBrandDTO } from "../interface/brands";
import { Request, Response } from "express";
import BrandsModel from "../models/brands";

async function FindAll(_req: Request, res: Response) {
  const response = await BrandsModel.FindAll();

  if (!response.success) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
    return;
  }

  res.status(200).json({ message: null, ...response });
  return;
}

async function FindUnique(req: Request, res: Response) {
  const id = Number(req.params.id);

  const response = await BrandsModel.FindUnique(id);

  if (!response.success) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
    return;
  }

  res.status(200).json({ message: null, ...response });
  return;
}

async function Create(req: Request, res: Response) {
  const data: CreateBrandDTO = req.body;

  const response = await BrandsModel.Create(data);

  if (!response.success) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
    return;
  }

  res.status(201).json({ message: null, ...response });
  return;
}

async function Update(req: Request, res: Response) {
  const data: UpdateBrandDTO = req.body;

  const id = Number(req.params.id);

  const checkIfExists = await BrandsModel.FindUnique(id);

  if (!checkIfExists.success) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
    return;
  }

  if (!checkIfExists.data) {
    res.status(404).json({ success: false, message: "Not found", data: null });
    return;
  }

  const response = await BrandsModel.Update(id, data);

  if (!response.success) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
    return;
  }

  res.status(200).json({ message: null, ...response });
  return;
}

async function Delete(req: Request, res: Response) {
  const id = Number(req.params.id);

  const checkIfExists = await BrandsModel.FindUnique(id);

  if (!checkIfExists.success) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
    return;
  }

  if (!checkIfExists.data) {
    res.status(404).json({ success: false, message: "Not found", data: null });
    return;
  }

  const response = await BrandsModel.Delete(id);

  if (!response.success) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
    return;
  }

  res.status(200).json({ success: false, message: null, data: null });
  return;
}

const BrandsController = {
  FindAll,
  FindUnique,
  Create,
  Update,
  Delete,
};

export default BrandsController;

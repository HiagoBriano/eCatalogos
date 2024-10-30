import { CreateSkuDTO, UpdateSkuDTO } from "../interface/skus";
import { Request, Response } from "express";
import SkusModel from "../models/skus";

async function FindAll(_req: Request, res: Response) {
  const response = await SkusModel.FindAll();

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

  const response = await SkusModel.FindUnique(id);

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
  const data: CreateSkuDTO = req.body;

  const response = await SkusModel.Create(data);

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
  const data: UpdateSkuDTO = req.body;

  const id = Number(req.params.id);

  const checkIfExists = await SkusModel.FindUnique(id);

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

  const response = await SkusModel.Update(id, data);

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

  const checkIfExists = await SkusModel.FindUnique(id);

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

  const response = await SkusModel.Delete(id);

  if (!response.success) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
    return;
  }

  res.status(200).json({ success: false, message: null, data: null });
  return;
}

const SkusController = {
  FindAll,
  FindUnique,
  Create,
  Update,
  Delete,
};

export default SkusController;

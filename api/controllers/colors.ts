import { CreateColorDTO, UpdateColorDTO } from "../interface/colors";
import { Request, Response } from "express";
import ColorsModel from "../models/colors";

async function FindAll(_req: Request, res: Response) {
  const response = await ColorsModel.FindAll();

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

  const response = await ColorsModel.FindUnique(id);

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
  const data: CreateColorDTO = req.body;

  const response = await ColorsModel.Create(data);

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
  const data: UpdateColorDTO = req.body;

  const id = Number(req.params.id);

  const checkIfExists = await ColorsModel.FindUnique(id);

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

  const response = await ColorsModel.Update(id, data);

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

  const checkIfExists = await ColorsModel.FindUnique(id);

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

  const response = await ColorsModel.Delete(id);

  if (!response.success) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
    return;
  }

  res.status(200).json({ success: false, message: null, data: null });
  return;
}

const ColorsController = {
  FindAll,
  FindUnique,
  Create,
  Update,
  Delete,
};

export default ColorsController;

import { CreateImageDTO, UpdateImageDTO } from "../interface/images";
import { Request, Response } from "express";
import ImagesModel from "../models/images";

async function FindAll(_req: Request, res: Response) {
  const response = await ImagesModel.FindAll();

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

  const response = await ImagesModel.FindUnique(id);

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
  const data: CreateImageDTO = req.body;

  const response = await ImagesModel.Create(data);

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
  const data: UpdateImageDTO = req.body;

  const id = Number(req.params.id);

  const checkIfExists = await ImagesModel.FindUnique(id);

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

  const response = await ImagesModel.Update(id, data);

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

  const checkIfExists = await ImagesModel.FindUnique(id);

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

  const response = await ImagesModel.Delete(id);

  if (!response.success) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
    return;
  }

  res.status(200).json({ success: false, message: null, data: null });
  return;
}

const ImagesController = {
  FindAll,
  FindUnique,
  Create,
  Update,
  Delete,
};

export default ImagesController;

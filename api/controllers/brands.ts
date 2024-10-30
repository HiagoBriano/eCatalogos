import { NextFunction, Request, Response } from "express";
import BrandsModel from "../models/brands";

export async function FindAll(req: Request, res: Response, next: NextFunction) {
  const response = await BrandsModel.FindAll();

  if (!response.success) return next(error);

  return res.status(200).json({ message: null, ...response });
}

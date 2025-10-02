import { Request, Response } from "express";

export interface IProductController {
  getProducts(_: Request, res: Response): Promise<Response>;
}

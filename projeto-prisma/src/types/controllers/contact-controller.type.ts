import { Request, Response } from "express";

export interface IContactController {
  getContacts(req: Request, res: Response): void;
}

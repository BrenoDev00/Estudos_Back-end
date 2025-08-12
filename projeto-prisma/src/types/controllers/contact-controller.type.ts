import { Request, Response } from "express";

export interface IContacController {
  getContacts(req: Request, res: Response): Promise<Response>;

  addContact(req: Request, res: Response): Promise<Response>;
}

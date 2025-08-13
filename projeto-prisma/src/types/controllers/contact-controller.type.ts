import { Request, Response } from "express";

export interface IContactController {
  getContacts(req: Request, res: Response): Promise<Response>;

  getContactById(req: Request, res: Response): Promise<Response>;

  addContact(req: Request, res: Response): Promise<Response>;
}

import { IContactController } from "../types/controllers/contact-controller.type";
import { Request, Response } from "express";

export class ContactController implements IContactController {
  getContacts(req: Request, res: Response) {}
}

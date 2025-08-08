import { Contact } from "../../generated/prisma";
import { IContacController as IContactController } from "../types/controllers/contact-controller.type";
import { Request, Response } from "express";
import { contactRepository } from "../repositories/contact-repository";
class ContactController implements IContactController {
  async getContacts(
    _req: Request,
    res: Response
  ): Promise<Response<Contact[]>> {
    try {
      const contactsList: Contact[] = await contactRepository.getAllContacts();

      return res.status(200).send({
        items: contactsList,
      });
    } catch (error) {
      return res.status(500).send({ message: "Erro ao buscar contatos." });
    }
  }
}

export const contactController = new ContactController();

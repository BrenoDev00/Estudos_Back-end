import { Contact } from "../../generated/prisma";
import { IContacController as IContactController } from "../types/controllers/contact-controller.type";
import { Request, Response } from "express";
import { contactRepository } from "../repositories/contact-repository";
import { TAddContact } from "../types/add-contact.type";
class ContactController implements IContactController {
  async getContacts(_req: Request, res: Response): Promise<Response> {
    try {
      const contactsList: Contact[] = await contactRepository.getAllContacts();

      return res.status(200).send({
        contacts: contactsList,
      });
    } catch (error) {
      return res.status(500).send({ message: "Erro ao buscar contatos." });
    }
  }

  async addContact(req: Request, res: Response): Promise<Response> {
    const { body } = req;

    const contactData = body as TAddContact;

    try {
      await contactRepository.addContact(contactData);

      return res.status(201).send({ message: "Contato adicionado." });
    } catch (error) {
      return res.status(500).send({ message: "Erro ao adicionar contato." });
    }
  }
}

export const contactController = new ContactController();

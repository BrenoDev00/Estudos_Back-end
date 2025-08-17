import { Contact } from "../../generated/prisma";
import { IContactController } from "../types/controllers/contact-controller.type";
import { Request, Response } from "express";
import { contactRepository } from "../repositories/contact-repository";
import { TAddContact } from "../types/add-contact.type";
import { contactService } from "../services/contact-service";

class ContactController implements IContactController {
  async getContacts(_req: Request, res: Response): Promise<Response> {
    try {
      const contactsList: Contact[] = await contactService.getAllContacts();

      return res.status(200).send({
        contacts: contactsList,
      });
    } catch (error) {
      return res.status(500).send({ message: "Erro ao buscar contatos." });
    }
  }

  async getContactById(req: Request, res: Response): Promise<Response> {
    const { contactId } = req.params;

    try {
      const contactById: Contact = await contactService.getContactById(
        contactId!
      );

      if (!contactById)
        return res.status(404).send({ message: "Contato não encontrado." });

      return res.status(200).send({ contact: contactById });
    } catch (error) {
      return res.status(500).send({ message: "Erro ao buscar contato." });
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

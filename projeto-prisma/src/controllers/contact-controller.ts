import { IContactController } from "../types/controllers/contact-controller.type";
import { Request, Response } from "express";
import { z } from "zod";
import { contactService } from "../services/contact-service";
import { addContactSchema } from "../schemas/add-contact-schema";
import { updatContactSchema } from "../schemas/update-contact-schema";
import { TAllContactsData } from "../types/all-contacts-data.type";
import { TContactData } from "../types/contact-data.type";

class ContactController implements IContactController {
  async getAllContacts(_req: Request, res: Response): Promise<Response> {
    try {
      const contactsList: TAllContactsData[] =
        await contactService.getAllContacts();

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
      const contactById: TContactData = await contactService.getContactById(
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

    const contactDataValidation = addContactSchema.safeParse(body);

    if (!contactDataValidation.success) {
      const formattedContactErrors = z.prettifyError(
        contactDataValidation.error
      );

      return res.status(400).send(formattedContactErrors);
    }

    try {
      await contactService.addContact(body);

      return res.status(201).send({ message: "Contato adicionado." });
    } catch (error) {
      return res.status(500).send({ message: "Erro ao adicionar contato." });
    }
  }

  async updateContactById(req: Request, res: Response): Promise<Response> {
    const { contactId } = req.params;
    const { body } = req;

    const contactById: TContactData = await contactService.getContactById(
      contactId!
    );

    if (!contactById)
      return res.status(404).send({ message: "Contato não encontrado." });

    const contactDataValidation = updatContactSchema.safeParse(body);

    if (!contactDataValidation.success) {
      const formattedContactErrors = z.prettifyError(
        contactDataValidation.error
      );

      return res.status(400).send(formattedContactErrors);
    }

    try {
      await contactService.updateContactById(contactId!, body);

      return res.status(200).send(contactById.id);
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Não foi possível atualizar o contato." });
    }
  }

  async deleteContactById(req: Request, res: Response): Promise<Response> {
    const { contactId } = req.params;

    const contactById: TContactData = await contactService.getContactById(
      contactId!
    );

    if (!contactById) {
      return res.status(404).send({ message: "Contato não encontrado." });
    }

    try {
      await contactService.deleteContactById(contactId!);

      return res.status(204).send();
    } catch (error) {
      return res.status(500).send({ message: "Erro ao excluir contato." });
    }
  }
}

export const contactController = new ContactController();

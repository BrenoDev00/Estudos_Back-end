import { Contact } from "../../generated/prisma";
import { IContactService } from "../types/services/contact-service.type";
import { contactRepository } from "../repositories/contact-repository";

export class ContactService implements IContactService {
  async getAllContacts(): Promise<Contact[]> {
    return await contactRepository.getAllContacts();
  }

  async getContactById(contactId: string): Promise<Contact> {
    return await contactRepository.getContactById(contactId);
  }
}

export const contactService = new ContactService();

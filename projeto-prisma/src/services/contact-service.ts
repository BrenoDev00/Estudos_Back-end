import { Contact } from "../../generated/prisma";
import { IContactService } from "../types/services/contact-service.type";
import { contactRepository } from "../repositories/contact-repository";
import { TAddContact } from "../types/add-contact.type";

export class ContactService implements IContactService {
  async getAllContacts(): Promise<Contact[]> {
    return await contactRepository.getAllContacts();
  }

  async getContactById(contactId: string): Promise<Contact> {
    return await contactRepository.getContactById(contactId);
  }

  async addContact(contact: TAddContact): Promise<TAddContact> {
    return await contactRepository.addContact(contact);
  }

  async deleteContactById(contactId: string): Promise<Contact> {
    return await contactRepository.deleteContactById(contactId);
  }
}

export const contactService = new ContactService();

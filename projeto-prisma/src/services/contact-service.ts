import { Contact } from "@prisma/client";
import { IContactService } from "../types/services/contact-service.type";
import { ContactRepository } from "../repositories/contact-repository";
import { TAddContact } from "../types/add-contact.type";
import { TUpdateContact } from "../types/update-contact.type";
import { TAllContactsData } from "../types/all-contacts-data.type";
import { TContactData } from "../types/contact-data.type";

export class ContactService implements IContactService {
  constructor(private readonly contactRepository: ContactRepository) {}

  async getAllContacts(): Promise<TAllContactsData[]> {
    return await this.contactRepository.getAllContacts();
  }

  async getContactById(contactId: string): Promise<TContactData> {
    return await this.contactRepository.getContactById(contactId);
  }

  async addContact(
    contact: TAddContact,
  ): Promise<TAddContact & { id: string }> {
    return await this.contactRepository.addContact(contact);
  }

  async updateContactById(
    contactId: string,
    contact: TUpdateContact,
  ): Promise<TUpdateContact & { id: string }> {
    return await this.contactRepository.updateContactById(contactId, contact);
  }

  async deleteContactById(contactId: string): Promise<Contact> {
    return await this.contactRepository.deleteContactById(contactId);
  }
}

import { Contact } from "@prisma/client";
import { TAddContact } from "../add-contact.type";
import { TUpdateContact } from "../update-contact.type";

export interface IContactRepository {
  getAllContacts(): Promise<Contact[]>;

  getContactById(contactId: string): Promise<Contact>;

  addContact(contact: TAddContact): Promise<TAddContact>;

  updateContactById(
    contactId: string,
    contact: TUpdateContact
  ): Promise<TUpdateContact>;

  deleteContactById(contactId: string): Promise<Contact>;
}

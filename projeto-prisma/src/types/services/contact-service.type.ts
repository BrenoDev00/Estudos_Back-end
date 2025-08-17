import { Contact } from "../../../generated/prisma";
import { TAddContact } from "../add-contact.type";

export interface IContactService {
  getAllContacts(): Promise<Contact[]>;

  getContactById(contactId: string): Promise<Contact>;

  addContact(contact: TAddContact): Promise<TAddContact>;

  deleteContactById(contactId: string): Promise<Contact>;
}

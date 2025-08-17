import { Contact } from "../../../generated/prisma";
import { TAddContact } from "../add-contact.type";
import { TUpdateContact } from "../update-contact.type";

export interface IContactService {
  getAllContacts(): Promise<Contact[]>;

  getContactById(contactId: string): Promise<Contact>;

  addContact(contact: TAddContact): Promise<TAddContact>;

  updateContactById(
    contactId: string,
    contact: TUpdateContact
  ): Promise<TUpdateContact>;

  deleteContactById(contactId: string): Promise<Contact>;
}

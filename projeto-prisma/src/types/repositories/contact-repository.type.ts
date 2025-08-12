import { Contact } from "../../../generated/prisma";
import { TAddContact } from "../add-contact.type";

export interface IContactRepository {
  getAllContacts(): Promise<Contact[]>;

  addContact(contact: TAddContact): Promise<TAddContact>;
}

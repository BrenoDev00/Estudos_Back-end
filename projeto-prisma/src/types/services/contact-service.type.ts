import { Contact } from "@prisma/client";
import { TAddContact } from "../add-contact.type";
import { TAllContactsData } from "../all-contacts-data.type";
import { TContactData } from "../contact-data.type";
import { TUpdateContact } from "../update-contact.type";

export interface IContactService {
  getAllContacts(): Promise<TAllContactsData[]>;

  getContactById(contactId: string): Promise<TContactData>;

  addContact(contact: TAddContact): Promise<TAddContact>;

  updateContactById(
    contactId: string,
    contact: TUpdateContact
  ): Promise<TUpdateContact>;

  deleteContactById(contactId: string): Promise<Contact>;
}

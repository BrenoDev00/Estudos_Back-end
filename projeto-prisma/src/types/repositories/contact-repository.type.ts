import { Contact } from "@prisma/client";
import { TAddContact } from "../add-contact.type";
import { TUpdateContact } from "../update-contact.type";
import { TAllContactsData } from "../all-contacts-data.type";
import { TContactData } from "../contact-data.type";

export interface IContactRepository {
  getAllContacts(): Promise<TAllContactsData[]>;

  getContactById(contactId: string): Promise<TContactData>;

  addContact(contact: TAddContact): Promise<TAddContact & { id: string }>;

  updateContactById(
    contactId: string,
    contact: TUpdateContact,
  ): Promise<TUpdateContact & { id: string }>;

  deleteContactById(contactId: string): Promise<Contact>;
}

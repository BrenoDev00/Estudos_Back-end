import { Contact } from "@prisma/client";
import { TAllContactsData } from "../types/all-contacts-data.type";
import { IContactRepository } from "../types/repositories/contact-repository.type";
import { TContactData } from "../types/contact-data.type";
import { TAddContact } from "../types/add-contact.type";
import { TUpdateContact } from "../types/update-contact.type";

export class InMemoryContactRepository implements IContactRepository {
  private contacts: TAllContactsData[] = [];

  async getAllContacts(): Promise<TAllContactsData[]> {
    return Promise.resolve(this.contacts);
  }

  async getContactById(contactId: string): Promise<TContactData | null> {
    const searchedContact = this.contacts.find(
      (contact) => contact.id === contactId,
    );

    return Promise.resolve(searchedContact ?? null);
  }

  async addContact(
    contact: TAddContact,
  ): Promise<TAddContact & { id: string }> {
    const phonesToSave = contact.phone.map((phone) => {
      return {
        ...phone,
        id: new Date().toString(),
      };
    });

    const addressToSave = { ...contact.address, id: new Date().toString() };

    const contactToSave: TContactData = {
      id: new Date().toString(),
      name: contact.name,
      address: addressToSave,
      phone: phonesToSave,
    };

    this.contacts.push(contactToSave);

    return Promise.resolve(contactToSave);
  }

  updateContactById(
    contactId: string,
    contact: TUpdateContact,
  ): Promise<TUpdateContact & { id: string }> {
    let contactToUpdate = contact;

    this.contacts.map((contact) => {
      if (contact.id === contactId) {
        const phonesToSave = contact.phone.map((phone) => {
          return {
            ...phone,
            id: new Date().toString(),
          };
        });

        const addressToSave = { ...contact.address, id: new Date().toString() };

        contact = {
          ...contactToUpdate,
          id: contactId,
          phone: phonesToSave,
          address: addressToSave,
        };
      }
    });

    const updatedContact = { ...contact, id: contactId };

    return Promise.resolve(updatedContact);
  }

  deleteContactById(contactId: string): Promise<Contact> {
    const deletedContact = this.contacts.find(
      (contact) => contact.id === contactId,
    ) as TAllContactsData;

    this.contacts.filter((contact) => contact.id !== contactId);

    return Promise.resolve({
      name: deletedContact?.name,
      id: deletedContact.id,
    });
  }
}

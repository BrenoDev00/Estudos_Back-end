import { prisma } from "../config/prisma";
import { Contact } from "../../generated/prisma";
import { IContactRepository } from "../types/repositories/contact-repository.type";
import { TAddContact } from "../types/add-contact.type";
class ContactRepository implements IContactRepository {
  async getAllContacts(): Promise<Contact[]> {
    return await prisma.contact.findMany({
      include: {
        phone: {
          select: {
            id: true,
            title: true,
            number: true,
          },
        },
        address: {
          select: {
            id: true,
            street: true,
            zipCode: true,
            number: true,
          },
        },
      },
    });
  }

  async getContactById(contactId: string): Promise<Contact> {
    return (await prisma.contact.findUnique({
      where: { id: contactId },
      include: {
        phone: {
          select: {
            id: true,
            title: true,
            number: true,
          },
        },
        address: {
          select: {
            id: true,
            street: true,
            zipCode: true,
            number: true,
          },
        },
      },
    })) as Contact;
  }

  async addContact(contact: TAddContact): Promise<TAddContact> {
    const { address, phone, name } = contact;

    return (await prisma.contact.create({
      data: {
        name: name,
        phone: {
          createMany: {
            data: phone,
          },
        },
        address: {
          create: address,
        },
      },
      include: {
        phone: true,
        address: true,
      },
    })) as TAddContact;
  }
}

export const contactRepository = new ContactRepository();

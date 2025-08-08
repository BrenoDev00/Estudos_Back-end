import { prisma } from "../config/prisma";
import { Contact } from "../../generated/prisma";
import { IContactRepository } from "../types/repositories/contact-repository.type";
class ContactRepository implements IContactRepository {
  async getAllContacts(): Promise<Contact[]> {
    return await prisma.contact.findMany({
      include: {
        phone: true,
        address: true,
      },
    });
  }
}

export const contactRepository = new ContactRepository();

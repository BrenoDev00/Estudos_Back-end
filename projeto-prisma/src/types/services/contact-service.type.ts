import { Contact } from "../../../generated/prisma";

export interface IContactService {
  getAllContacts(): Promise<Contact[]>;

  getContactById(contactId:string): Promise<Contact>;
}

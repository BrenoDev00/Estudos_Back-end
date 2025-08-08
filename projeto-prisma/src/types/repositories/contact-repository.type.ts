import { Contact } from "../../../generated/prisma";

export interface IContactRepository {
  getAllContacts(): Promise<Contact[]>;
}

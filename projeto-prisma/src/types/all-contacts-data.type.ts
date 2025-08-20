import { Phone, Address } from "../../generated/prisma";

export type TAllContactsData = {
  id: string;
  name: string;
  phone: Omit<Phone, "contactId">[];
  address: Omit<Address, "contactId">;
};

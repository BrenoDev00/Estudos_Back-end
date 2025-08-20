import { Phone, Address } from "../../generated/prisma";

export type TContactData = {
  id: string;
  name: string;
  phone: Omit<Phone, "contactId">[];
  address: Omit<Address, "contactId">;
};

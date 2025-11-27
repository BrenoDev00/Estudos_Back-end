import { Phone, Address } from "@prisma/client";

export type TContactData = {
  id: string;
  name: string;
  phone: Omit<Phone, "contactId">[];
  address: Omit<Address, "contactId">;
};

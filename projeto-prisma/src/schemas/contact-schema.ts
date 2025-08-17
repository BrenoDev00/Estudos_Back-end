import { z } from "zod";

export const addContactSchema = z.object({
  name: z.string().min(3).max(64),
  phone: z.array(
    z.object({
      title: z.string().min(3).max(64),
      number: z.string().min(10).max(14),
    })
  ),
  address: z.object({
    street: z.string().min(3).max(64),
    zipCode: z.string().min(9).max(9),
    number: z.number().min(1).max(999999),
  }),
});

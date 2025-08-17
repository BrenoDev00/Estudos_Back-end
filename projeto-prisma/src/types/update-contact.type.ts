import { z } from "zod";
import { addContactSchema } from "../schemas/add-contact-schema";

export type TUpdateContact = z.infer<typeof addContactSchema>;

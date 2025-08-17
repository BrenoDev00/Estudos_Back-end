import { z } from "zod";
import { addContactSchema } from "../schemas/contact-schema";

export type TAddContact = z.infer<typeof addContactSchema>;

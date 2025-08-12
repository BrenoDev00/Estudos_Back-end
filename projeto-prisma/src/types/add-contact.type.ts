import { z } from "zod";
import { contactSchema } from "../schemas/contact-schema";

export type TAddContact = z.infer<typeof contactSchema>;

import { z } from "zod";
import { updatContactSchema } from "../schemas/update-contact-schema";

export type TUpdateContact = z.infer<typeof updatContactSchema>;

import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3).max(64),
  email: z.email(),
  password: z.string().min(12).max(12),
});

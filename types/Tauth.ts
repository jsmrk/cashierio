import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});
export type LogInFormFields = z.infer<typeof LoginSchema>;

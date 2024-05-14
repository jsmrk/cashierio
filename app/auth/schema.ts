import { z } from "zod";

export const SignUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirm: z.string().min(6, {
      message: "Password is required.",
    }),
  })
  .refine((data) => data.confirm === data.password, {
    message: "Password did not match",
    path: ["confirm"],
  });

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Enter your password",
  }),
});

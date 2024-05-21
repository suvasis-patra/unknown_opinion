import * as z from "zod";

export const userRegistrationValidation = z.object({
  username: z
    .string({ required_error: "username is required" })
    .min(1, { message: "username is required" })
    .max(28, { message: "username is too long" }),
  email: z
    .string({ required_error: "email is requierd" })
    .email({ message: "Enter a valid email" }),
  password: z.string({ required_error: "password is required" }).min(6, {
    message: "Too short password",
  }),
});

export const userLoginValidation = z.object({
  identifier: z.string({ required_error: "username is required" }),
  password: z.string({ required_error: "Password is required" }),
});

export const verifyValidation = z.object({
  verifyCode: z.string().min(6),
});

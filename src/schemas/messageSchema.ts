import * as z from "zod";

export const messageValidation = z.object({
  message: z
    .string({ required_error: "message is required" })
    .min(5, { message: "Too short message" })
    .max(350, { message: "Too long message" }),
});

export const isAcceptingMessageValidation = z.object({
  isAcceptingMessage: z.boolean(),
});

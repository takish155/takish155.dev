import z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, { message: "minNameError" })
    .max(30, { message: "maxNameError" }),
  email: z.string().email({ message: "emailError" }),
  message: z
    .string()
    .min(10, { message: "minMessageError" })
    .max(1000, { message: "maxMessageError" }),
});

export type ContactSchema = z.infer<typeof contactSchema>;

import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
    lastname: z.string().min(3, "Sobrenome deve ter no mínimo 3 caracteres"),
    gender: z.string().refine((field) => field !== "select", {
      message: "Selecione um gênero",
    }),
    email: z
      .string()
      .min(3, "Email deve ter no mínimo 3 caracteres")
      .email("Utilize um email válido"),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirmpassword: z
      .string()
      .min(6, "A confirmação precisa ter no mínimo 6 caracteres"),
    agree: z.boolean().refine((field) => field === true, {
      message: "Você precisa concordar com os termos",
    }),
  })
  .refine((field) => field.password === field.confirmpassword, {
    message: "As senhas não coincidem",
    path: ["confirmpassword"],
  });

export type FormSchema = z.infer<typeof formSchema>;

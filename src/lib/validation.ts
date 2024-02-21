import * as z from "zod"

export const loginFormSchema = z.object({
  fin: z
    .string()
    .min(1, "FİN kodu daxil edin")
    .length(7, "FIN kod 7 simvoldan ibarət olmalıdır.")
    .regex(
      /^[A-Za-z0-9]+$/,
      "FİN kod yalnız hərf və rəqəmlərdən ibarət olmalıdır."
    ),
  password: z.string().min(1, "Şifrəni daxil edin"),
})

export type LoginFormSchemaType = z.infer<typeof loginFormSchema>

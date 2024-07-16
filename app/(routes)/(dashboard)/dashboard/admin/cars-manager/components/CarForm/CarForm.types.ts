import z from "zod"

export const CarFormSchema = z.object({
  name: z.string().min(1).max(50),
  cv: z.string().min(1).max(50),
  transmission: z.string().min(1).max(50),
  people: z.string().min(1),
  photo: z.string().min(1).max(100),
  engine: z.string().min(1).max(50),
  type: z.string().min(1).max(50),
  priceDay: z.string().min(1).max(50),
  published: z.boolean()
})

export type CarFormType = z.infer<typeof CarFormSchema>
import { z } from 'zod'

export const todoSchema = z.object({
    // id: z.string().trim().min(1, { message: 'ID is required' }),
    text: z.string().min(5),
    // completed: z.boolean().default(false), 
})

export type TodoSchemaType = z.infer<typeof todoSchema>

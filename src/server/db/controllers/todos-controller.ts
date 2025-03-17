

import type { TodoSchemaType } from 'validators/toto.schema'
import { db } from '..'
import { todos } from '../schema'
import { nanoid } from 'nanoid'


export async function createTodo({
    values,
}: {
    values: TodoSchemaType
}) {
    try {
        const data = await db.transaction(async (tx) => {
            return await tx.insert(todos).values({
                ...values,
                completed: false,
                id: nanoid(),
            })
        })

        return {
            success: true,
            data,
            message: 'Todo successfully created',
        }
    } catch (error) {
        console.debug(error)
        const err = error as Error

        return {
            success: false,
            message: err.message ?? 'An error occured',
            data: null,
        }
    }
}


export async function getTodos() {
    const getTodos = await db.select().from(todos); 
    return getTodos;
}
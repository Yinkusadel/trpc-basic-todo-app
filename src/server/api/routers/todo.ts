import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "/server/api/trpc";
import { todoSchema } from "validators/toto.schema";
import { createTodo, getTodos } from "/server/db/controllers/todos-controller";

export const todoRouter = createTRPCRouter({
  getTodos: publicProcedure
  .query(async () => {
    return getTodos(); 
  }),
  submitTodo: publicProcedure
    .input(z.object({ values: todoSchema }))
    .mutation(async ({ input: { values } }) => {
      return createTodo({
        values,
      })
    }),
});

"use client"
import { useState } from "react";
import { api } from "/trpc/react";

export default function Home() {
  const [todo, setTodo] = useState("")

  const utils = api.useUtils()

  const getTodos = api.todo.getTodos.useQuery()
  const submitTodo = api.todo.submitTodo.useMutation({
    onSuccess: async () => {
      await utils.todo.getTodos.invalidate()
    },
  })

  return (
    <main className=" flex flex-col items-center bg-green-300 pt-4 h-screen">
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!todo) {
          return alert("Please enter a todo")
        }
        submitTodo.mutate({
          values: {
            text: todo,
          },
        })
      }}>
        <div>
          <input
            type="text"
            name="todo"
            id="todo"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button className="bg-green-400">Submit</button>
        </div>
      </form>

      <div>

        {
          getTodos.isSuccess && getTodos.data.map((todo) => (
            <div key={todo.id}>
              {todo.text}
            </div>
          ))
        }

      </div>
    </main>
  );
}

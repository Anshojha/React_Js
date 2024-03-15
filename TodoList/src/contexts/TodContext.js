import { useContext, createContext } from "react";

export const TodoContext = useContext({
  todo: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],

  addTodo: (todo) => {},
  updateTodo : (todo , id) => {},
  deleteTodo : (id) => {},
  toggleComplete : (id) => {}
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const Todoprovider = TodoContext.Provider;

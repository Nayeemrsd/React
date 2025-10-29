import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
  //   addTodo: (todo) => {},
  //   updateTodo: (id, todo) => {},
  //   deleteTodo: (id) => {},
  //   toggleComplete: (id) => {},
  // actual mein second one likhna hai lets see bina parameters k project banta k nhi
  //   agr nhi bana to second wale ko commentout kar dena aur first wale ko comment kar dena
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};

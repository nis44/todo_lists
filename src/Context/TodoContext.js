/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {}
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext);
}
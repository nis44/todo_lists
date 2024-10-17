import { useState } from "react";
import { TodoContextProvider } from "./Context";
import { useEffect } from "react";
import { Todoitem } from "./components";
import TodoForum from "./components/Todoforum";

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevtodo) => prevtodo.id === id ? {...prevtodo, completed: !prevtodo.completed} : prevtodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])





  return (
    <TodoContextProvider value = {{todos, toggleComplete,addTodo,deleteTodo,updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">{/* Todo form goes here */}<TodoForum/></div>
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <Todoitem todo = {todo}/>
            </div>
          ))}
        </div>
      </div>
    </div>
    console.log(todos);
    
    </TodoContextProvider>
  );
};

export default App;

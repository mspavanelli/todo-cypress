import { useState, useEffect } from "react";

import TodoList from "./components/TodoList";
import InputBox from "./components/InputBox";

import "./styles.css";

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("@todo-app/list"));

    setTodos(storageTodos || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("@todo-app/list", JSON.stringify(todos));
  }, [todos]);

  function handleAddNewTodo() {
    setTodos([newTodo, ...todos]);
    setNewTodo("");
  }

  function handleDeleteTodo(deletedTodo) {
    setTodos(todos.filter(todo => todo !== deletedTodo));
  }

  return (
    <main>
      <h1>Todo App</h1>

      <hr />

      <InputBox
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAddNewTodo={handleAddNewTodo}
      />
      <TodoList todos={todos} handleDelete={handleDeleteTodo} />
    </main>
  );
};

export default App;

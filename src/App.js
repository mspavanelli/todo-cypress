import { useState, useEffect } from "react";

import TodoList from "./components/TodoList";

import "./styles.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState("");

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

  function handleInputKeyPress({ key }) {
    const isEnterPressed = key === "Enter";

    if (isEnterPressed) {
      handleAddNewTodo();
    }
  }

  function handleInputChange(event) {
    setNewTodo(event.target.value);
  }

  return (
    <main>
      <h1>Todo App</h1>

      <hr />

      <div>
        <input
          data-cy="input-new-todo"
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          placeholder="Type a new todo"
          type="text"
          value={newTodo}
        />
        <button onClick={handleAddNewTodo} data-cy="btn-add-todo">
          Add
        </button>
      </div>

      <TodoList todos={todos} handleDelete={handleDeleteTodo} />
    </main>
  );
};

export default App;

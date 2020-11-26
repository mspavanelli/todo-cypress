import { useState, useEffect } from "react";

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
          type="text"
          placeholder="Type a new todo"
          value={newTodo}
          onKeyPress={handleInputKeyPress}
          onChange={handleInputChange}
          data-cy="input-new-todo"
        />
        <button onClick={handleAddNewTodo} data-cy="btn-add-todo">
          Add
        </button>
      </div>

      {todos.length > 0 ? (
        <ul data-cy="todo-list">
          {todos.map(todo => (
            <li key={todo}>
              {todo}
              <button onClick={() => handleDeleteTodo(todo)}>&times;</button>
            </li>
          ))}
        </ul>
      ) : (
        <span>There are no todos</span>
      )}
    </main>
  );
};

export default App;

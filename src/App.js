import { useState } from "react";

import "./styles.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState("");

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

      <div>
        <input
          type="text"
          placeholder="Type a new todo"
          value={newTodo}
          onChange={event => setNewTodo(event.target.value)}
        />
        <button onClick={handleAddNewTodo}>Add</button>
      </div>

      {todos.length > 0 ? (
        <ul>
          {todos.map(todo => (
            <li key={todo}>
              {todo}
              <button onClick={() => handleDeleteTodo(todo)}>&times;</button>
            </li>
          ))}
        </ul>
      ) : (
        <span>Não há todos</span>
      )}
    </main>
  );
};

export default App;

const TodoList = ({ todos, handleDelete }) => {
  if (todos.length === 0) {
    return <span>There are no todos</span>;
  }

  return (
    <ul data-cy="todo-list">
      {todos.map(todo => (
        <li key={todo}>
          {todo}
          <button onClick={() => handleDelete(todo)}>&times;</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

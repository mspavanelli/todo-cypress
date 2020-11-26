const InputBox = ({ newTodo, handleAddNewTodo, setNewTodo }) => {
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
  );
};

export default InputBox;

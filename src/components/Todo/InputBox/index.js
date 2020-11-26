import { useRecoilState } from 'recoil'

import { todoState, todosState } from '../../../atoms/todo'

const Component = () => {
  const [newTodo, setNewTodo] = useRecoilState(todoState)
  const [todos, setTodos] = useRecoilState(todosState)

  const isValidTodo = todo => todo.trim().length > 0

  function handleAddNewTodo() {
    if (!isValidTodo(newTodo)) {
      return
    }

    setTodos([newTodo, ...todos])
    setNewTodo('')
  }

  function handleInputChange(event) {
    setNewTodo(event.target.value)
  }

  function handleInputKeyPress({ key }) {
    const isEnterPressed = key === 'Enter'

    if (isEnterPressed) {
      handleAddNewTodo()
    }
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
      <button type="button" onClick={handleAddNewTodo} data-cy="btn-add-todo">
        Add
      </button>
    </div>
  )
}

export default Component

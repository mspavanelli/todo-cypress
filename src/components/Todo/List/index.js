import { useRecoilState } from 'recoil'

import { todosState } from '../../../atoms/todo'

const Component = () => {
  const [todos, setTodos] = useRecoilState(todosState)

  function handleDelete(deletedTodo) {
    setTodos(todos.filter(todo => todo !== deletedTodo))
  }

  if (todos.length === 0) {
    return <span>There are no todos</span>
  }

  return (
    <ul data-cy="todo-list">
      {todos.map(todo => (
        <li key={todo}>
          {todo}
          <button type="button" onClick={() => handleDelete(todo)}>
            &times;
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Component

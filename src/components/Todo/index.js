import { Fragment, useState, useEffect } from 'react'

import TodoList from './List'
import InputBox from './InputBox'

const Component = () => {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem('@todo-app/list'))

    setTodos(storageTodos || [])
  }, [])

  useEffect(() => {
    localStorage.setItem('@todo-app/list', JSON.stringify(todos))
  }, [todos])

  function handleAddNewTodo() {
    setTodos([newTodo, ...todos])
    setNewTodo('')
  }

  function handleDeleteTodo(deletedTodo) {
    setTodos(todos.filter(todo => todo !== deletedTodo))
  }

  return (
    <Fragment>
      <InputBox
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAddNewTodo={handleAddNewTodo}
      />
      <TodoList todos={todos} handleDelete={handleDeleteTodo} />
    </Fragment>
  )
}

export default Component

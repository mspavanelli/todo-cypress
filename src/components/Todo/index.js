import { useRecoilState } from 'recoil'

import { Fragment, useEffect } from 'react'

import { todosState } from '../../atoms/todo'

import TodoList from './List'
import InputBox from './InputBox'

const Component = () => {
  const [todos, setTodos] = useRecoilState(todosState)

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem('@todo-app/list'))

    setTodos(storageTodos || [])
  }, [setTodos])

  useEffect(() => {
    localStorage.setItem('@todo-app/list', JSON.stringify(todos))
  }, [todos])

  return (
    <Fragment>
      <InputBox />
      <TodoList />
    </Fragment>
  )
}

export default Component

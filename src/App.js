import { RecoilRoot } from 'recoil'

import Todo from './components/Todo'

import './styles.css'

const App = () => {
  return (
    <RecoilRoot>
      <main>
        <h1>Todo App</h1>

        <hr />

        <Todo />
      </main>
    </RecoilRoot>
  )
}

export default App

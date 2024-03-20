import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <h2 >Hello , Aliens !!</h2>
      <AddTodo />
      <Todos/>
    </>
  )
}

export default App

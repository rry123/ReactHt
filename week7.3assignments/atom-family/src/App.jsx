import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilState, RecoilRoot } from 'recoil'
import { todosAtomFamily } from './atoms'

function App() {

  return (
    <RecoilRoot>
      <Todo id = {1}></Todo>
      <br></br>
      <Todo id = {2}></Todo>
    </RecoilRoot>
  )
}

function Todo({id}){
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
        {todo.title} <br></br>
        {todo.description}
    </>
  )
}

export default App


/*
In the TODO application, lets say you are supposed to get TODOs from a server
https://sum-server.100xdevs.com/todo?id=1
*/
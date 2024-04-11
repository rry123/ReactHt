import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { todosAtomFamily } from './atoms'
import { RecoilRoot, useRecoilState, useRecoilStateLoadable } from 'recoil'
function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
        <Todo id = {1}></Todo>
        <Todo id = {2}></Todo>
    </RecoilRoot>
  )
}


function Todo({id}){
  const [todo, setTodo]  = useRecoilStateLoadable(todosAtomFamily(id))

  if(todo.state === "loading"){
    return <div>
      loading....
    </div>
  }
  else{
    return 
      <>
         {todo.title}
         {todo.description}
      </>
  }
}
export default App

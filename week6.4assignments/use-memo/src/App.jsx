import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Assignment1 } from './Components/Assignment1'
import { Assignment3 } from './Components/Assignment3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Assignment3></Assignment3>
      </div>
    </>
  )
}

export default App

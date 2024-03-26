import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Count/>
      </div>
    </>
  )
}


function Count(){
  return <div>
    <CountRenderer count = {count}/>
    <Buttons count = {count} setCount = {setCount} />
  </div>
}
function CountRenderer(){
  return <div>
    {count}
  </div>
}

function Buttons(){
  return <div>
    <button onClick={()=>{
      setCount(count+1);
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1);
    }}>Decrease</button>
  </div>
}

export default App

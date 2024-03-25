import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'

// function App() {
//   const [count, setCount] = useState(0)
//   // wrap anyone that wants to use the teleported value inside a provider
//   return (
//     <>
//       <div>
//         <Count count = {count} setCount = {setCount}></Count>
//       </div>
//     </>
//   )
// }


// function Count({count , setCount}){
//      return <div>
//       <CountRenderer count = {count}></CountRenderer>
//       <Buttons count = {count} setCount = {setCount}></Buttons>
//      </div>
// }

// function CountRenderer({count}){
//   return <div>
//     {count}
//   </div>
// }

// function Buttons({count, setCount}){
//       return <div>
//         <button onClick={()=>{
//             setCount(count+1);
//         }}>Increase</button>
//         <button onClick={()=>{
//             setCount(count-1);
//         }}>Decrease</button>
//       </div>
// }


// now doing the same thing using the context api 
// using context api we dont need to pass the arguments to the components which are being passed to the child component of the given component



function App() {
  const [count, setCount] = useState(0)
  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <>
      <div>
        <CountContext.Provider value = {count}>
        <Count setCount = {setCount}></Count>
        </CountContext.Provider>
      </div>
    </>
  )
}

function Count({count , setCount}){
  return <div>
   <CountRenderer count = {count}></CountRenderer>
   <Buttons count = {count} setCount = {setCount}></Buttons>
  </div>
}

function CountRenderer(){
const count = useContext(CountContext)
return <div>
 {count}
</div>
}

function Buttons({setCount}){
  const count = useContext(CountContext);
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

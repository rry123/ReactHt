import { useState, useEffect, useMemo, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <button onClick={function(){
//           setCount(count+1);
//         }}>Count is {count}</button>
//       </div>
//     </>
//   )
// }

//without useEffect

// function App(){
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});
 
//   useEffect(()=>{
//     setTimeout(()=>{
//       setBankData({income: 100})
//     }, 3000)
//   }, [])

  
//   useEffect(()=>{
//     setTimeout(()=>{
//       setExchange1Data({returns : 100})
//     }, 3000)
//   }, [])

//   useEffect(()=>{
//     setTimeout(()=>{
//       setExchange2Data({returns : 100})
//     }, 8000)
//   }, [])
  
  
//   const cryptoReturns = useMemo(()=>{
//     console.log("hi there before");
//     return exchange1Data.returns + exchange2Data.returns;
//   }, [])
//   console.log("hi there after");

//   const incomeTax = (cryptoReturns  + bankData.income) * 0.3;

//   return <div>
//     hi there, your income tax returns are {incomeTax}
//   </div>
// }


//useRef : Easy way of getting the control of innerHTML

function App(){
  const [incomeTax, setIncomeTax] = useState(20000);
  const divRef = useRef();
  useEffect(()=>{
     setTimeout(()=>{
         divRef.current.innerHTML = 10;
     }, 5000)
  }, []);

  

  return <div>
    hi there, your income tax is 
    <div ref={divRef}>
    {incomeTax}
    </div>
  </div>
}


export default App

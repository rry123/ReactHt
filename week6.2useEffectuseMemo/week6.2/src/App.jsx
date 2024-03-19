import { useState, useEffect, useMemo, useCallback, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todo } from './Components/Todo';
import axios from 'axios';

// function App() {
//   // const [todos, setTodos] = useState([{
//   //   id : 1,
//   //   title : "Gyming",
//   //   description : "Go to gym from 5 to 7"
//   // },{
//   //   id : 2,
//   //   title : "Studying",
//   //   description : "Start studying from 7 to 9"
//   // }]);

//   // useEffect(()=>{
//   //   axios.get("https://sum-server.100xdevs.com/todos")
//   //   .then(function(response){
//   //     setTodos(response.data.todos);
//   //   })   // axios is a library that under the hood uses fetch
//   // }, [])    // [] is the dependency array if it is empty the fetch request will go for only one time if you want to customise then u need to use that dependency array with some syntax
  
//   const [id, setId]  = useState(2);

//   function myFunc(btnId){
//     setId(btnId)
//   }
//   return (  
//       <div>
//            <button onClick={() => myFunc(1)}>1</button>
//            <button onClick={() => myFunc(2)}>2</button>
//            <button onClick={() => myFunc(3)}>3</button>
//            <button onClick={() => myFunc(4)}>4</button>
//            <Todo id = {id}></Todo>
//       </div>
//   )
// }

// creating an app which shows sum from 1 to n


// usememo is used to run the compute logic only when the inputvalue changes
// function App(){
//   const [inputValue, setInputValue] = useState(1);
//   const [counter, setCounter] = useState(0);
  
//   let count = useMemo(()=>{
//     let count = 0;
//     for(let i=1; i<=inputValue; i++){
//       count += i;
//     }
//     return count;
//   }, [inputValue])
  

//   // in order to memoize a function use useCallback instead of usememo

//   const a = useCallback(function(){
//       console.log("hi there");
//   }, [])


//   return <div>
//     <input id="input" type = "text" placeholder="Enter a number" onChange={function(e){
//       setInputValue(e.target.value);
//     }}></input>
//     <p>sum from 1 to {inputValue} is {count}</p>
//     <button onClick={()=>{
//       setCounter(counter+1);
//     }}>Counter ({counter})</button>
//   </div>
// }


//repeat

// function App(){
//   const [count, setCount] = useState(0);

//   const inputFunction = useCallback(()=>{
//     console.log("child clicked");
//   }, [])

//   return <div>
//     <Child onClick={inputFunction}/>
//     <button onClick={()=>{
//       setCount(count+1);
//     }}>Click me {count} </button>
//   </div>
// }


// const Child = memo(({inputFunction})=>{
//   console.log("child render");

//   return <div>
//     <button onClick={inputFunction}>Button clicked</button>
//   </div>
// })




// custom hooks 

// original code
// function App(){
//   const [todos, setTodos] = useState([]);

//   useEffect(()=>{
//     axios.get(``)
//     .then(function(res){
//       setTodos(res.data.todos);
//     })
//   }, [])

//   return <div>
//      {todos}
//   </div>
// }


// using custom

function useTodos(){
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    axios.get(``)
    .then(function(res){
      setTodos(res.data.todos);
    })
  }, [])
  return todos;
}

function  App(){
  const todos = useTodos();
  return <div>
    {todos}
  </div>
}
export default App

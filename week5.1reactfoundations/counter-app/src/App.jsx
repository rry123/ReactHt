// hook 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
todo application

todo{
  todos : [{title : "todo1", description : "first todo", completed : false}]
}
 */

function App() {
  const [todos, setTodos] = useState([{
    title : "Go to Gym",
    description : "Got to gym from seven to nine",
    completed : false
  }, {
    title : "Study DSA",
    description : "Study DSA from nine to ten",
    completed : true
  }]);


  function addTodo(){
    setTodos([...todos, {
      title : "new Todo",
      description : "desc of new todo"
    }])
  }
  return (
      <div>
         <button onClick={addTodo}>Add a random</button>
         {/*to render we need to user a for loop
         for writing javascript write between curly braces*/  }

         {
          todos.map(function(todo){
            return <Todo title ={todo.title} description ={todo.description}></Todo>
          })
         }
      </div>
  )

  //component
  // it will render a single todo
  function Todo(props){
    return <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  }
}

export default App

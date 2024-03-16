import { useEffect, useState } from 'react'
import './App.css'
import { CardWrapper } from './Componenets/CardWrapper'
import { Todo } from './Componenets/Todo';


function App() {
      const [todos, setTodos] = useState([{
        id : 1,
        title : "Gyming",
        description : "Go to gym 5 to 7"
      }, {
        id : 2,
        title : "Studying",
        description : "Study hard"
      },{
        id : 3,
        title : "Sleeping",
        description : "Sleep from moring to night"
      }]);
      // useEffect is used for knowing when for the first time the component has been rendered 

      useEffect(function(){
          fetch("http://sum-server.100xdevs.com/todos")
          .then(async function(res){
            const json = await res.json();
            setTodos(json.todos);
          })
      }, [])    // [] is the dependency array
      return <div>
          
            {todos.map(function(todo){
              return <CardWrapper key = {todo.id}><Todo  title = {todo.title} description = {todo.description}></Todo></CardWrapper>
            })}
          
      </div>
}

export default App


//sum server
// http://sum-server.100xdevs.com/todos

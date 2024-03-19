import axios from "axios";
import { useEffect, useState } from "react"
axios
export function Todo({id}){
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then(function(response){
             setTodos(response.data.todo)
        })
    }, [id])    // here the dependency array is not empty because whenever the id changes it has to send a request to server
    return <div>
        <h2>{id}</h2>
        <h3>{todos.title}</h3>
        <h5>{todos.description}</h5> 
    </div>
}
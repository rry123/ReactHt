/*
Create a component with a text input field and a button. The goal is to display an alert with the text entered 
when the button is clicked 
*/
import { useState, useCallback } from "react";
export function Assignment2(){
    const [inputText, setInputText] = useState("");

    const showAlert= useCallback(()=>{
        alert(inputText);
    }, [inputText])
    return <div>
        <input
        type="text"
        placeholder="Enter text"
        onChange={(e)=>{
            setInputText(e.target.value);
        }}></input>
        
        <button onClick={showAlert}>Click me</button>
    </div>
}
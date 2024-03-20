/*
Create a component with a text input field and a button. When the component mounts or the button is clicked
automatically focus the text input field using useRef
*/

import { useEffect, useRef } from "react";

// without react using document.getElementById
// export function Assignment1(){

//     useEffect(()=>{
//         document.getElementById("inputBox").focus();
//     }, [])
//     const handleButtonClick = () => {
//           document.getElementById("inputBox").focus();
//     };
//     return <div>
//         <input id="inputBox" type="text" placeholder = "Enter text here"></input>
//         <button onClick={handleButtonClick}>Focus Input</button>
//     </div>
// }


// useRef is used to make references to DOM elements

export function Assignment1(){
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    }, []);

    const handleButtonClick = ()=>{
        inputRef.current.focus();
    }

    return <div>
        <input
        ref = {inputRef}
        type = "text"
        placeholder = "Enter text here"
        />
        <button onClick={handleButtonClick}>Focus Input</button>
    </div>
}


/*
Create a component that tracks and displays the number of times it has been rendered 
*/

import { useState, useRef } from "react";
export function Assignment2(){
    const[, forceRender] = useState(0);

    const numberOfTimesReRendered = useRef(0);
    const handleReRender = ()=>{
        forceRender(Math.random());
    }
    

    numberOfTimesReRendered.current = numberOfTimesReRendered.current +1;
    return <div>
        <p>This component has rendered {numberOfTimesReRendered.current} times.</p>
        <button onClick={handleReRender}>Force Re-render</button>
    </div>
}
/*
Your task is to create a component that performs an expensive calculation
(finding the factorial) based on a user input
// use usememo to ensure that the calculation is only recomputed when the input changes , not on every render
*/

import { useState, useMemo } from "react"

export function Assignment1(){
    const [input, setInput] = useState(0);
    
    const expensiveValue = useMemo(()=>{
        let value = 1;
        for(let i=1; i<=input; i++){
            value*=i;
        }
        return value;
    }, [input]);

    return <div>
        <input
        type = "number"
        value={input}
        onChange={(e)=>setInput(Number(e.target.value))}></input>
        <p>Calculated value : {expensiveValue}</p>
    </div>
}
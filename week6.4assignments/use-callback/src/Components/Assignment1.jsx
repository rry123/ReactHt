

/*
Create a counter component with increment and decrement functions. Pass these functions to a child 
component which has button to perform the increment and decrement actions. Use useCallback to ensure that these
functions functions are not recreated on every render
*/
import { useState, memo, useCallback } from "react";

export function Assignment1(){
    const [count, setCount] = useState(0);

    const  handleIncrement = useCallback(()=>{
        setCount(count => count+1);
    }, [])

    const  handleDecrement = useCallback(()=>{
        setCount(count => count-1);
    }, [])

    return <div>
        <div> Count : {count} </div>
        <CoutnerButtons onIncrement={handleIncrement} onDecrement={handleDecrement}></CoutnerButtons>
    </div>
}


const CoutnerButtons = memo(({onIncrement, onDecrement})=>(
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
))
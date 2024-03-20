
/*
You have been given a list of items you shopped from the grocery store
You need to calculate the total amount of money you spent
*/
import { useState, useMemo } from "react";
export const Assignment3 = ()=>{
    const [items, setItems]= useState([
        {name : 'Chocolate', value : 10},
        {name : 'Chips', value : 20},
        {name : 'Onion', value : 30},
        {name : 'Tomato', value : 30}
    ]);

    const totalSum = useMemo(()=>{
        let sum =0;
        for(let i=0; i<items.length; i++){
            sum += items[i].value;
        }
        return sum;
    }, [items])
    return <div>
        <ul>
            {items.map((item, index) =>(
                <li key={index}>{item.name} -Price: ${item.value}</li>
            ))}
        </ul>

        <div>Sum of all items you purchased  is : {totalSum}</div>    
    </div>
}
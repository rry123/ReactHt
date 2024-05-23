import React from "react"

export const RevenueCard = ({
    title,
    orderCount,
    amount}) =>{
    return <div className= "bg-white rounded shadow-md p-4">
        <div className="flex">
           <div className="text-gray-600 pr-1">
            {title}
           </div>
           <div className = "pt-1">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


           </div>
           </div>
           
           <div className="flex justify-between">
            <div  className="font-bold text-2xl"> $ {amount}</div>

            {orderCount ?
             <div className = "flex cursor-pointer pt-2">
                <div className="underline text-blue-700">
                    {orderCount} order(s)
                </div>

                 <div className = "pt-1.5">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>          </div>
                </div> : null}
           </div>
    </div>
}
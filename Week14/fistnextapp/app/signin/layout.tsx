import React from "react"
export default function({children}:{children:React.ReactNode}){

    return(
        <>
        <div className="border-b p-1 text-red-600 bg-neutral-500/85 hover:bg-neutral-100" >
            20% off for the next few days! Use code OFF50 at checkout , HURRY UP
        </div>
        <div>
            {children}
        </div>
        </>
    )
}
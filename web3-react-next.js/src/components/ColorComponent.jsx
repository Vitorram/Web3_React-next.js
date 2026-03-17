
'use client'

import { use, useState } from "react"



export default function CardColor(){ 

    const [padrao, setPadrao] = useState("#d0bfff")
    const [modo, setModo] = useState(true)


    
   return(


   <div className="flex p-5 w-40 h-40 border items-center gap-5 flex-col ">
        <div className="bg-black w-full h-20" >  
           <button className="w-5 h-5 bg-amber-50 p-5" onClick={() => {}}></button>
        </div>

        <div className=" h-20 w-20 border ">
            <div className="w-full h-full" style={{backgroundColor: padrao}}></div>
        </div>
    <div className="flex gap-2">
        <div className="button w-5 h-5 border bg-[#ffec99]" >
            <button className="w-full h-full"  onClick={() => setPadrao("#ffec99")}></button>
        </div>
        <div className="button w-5 h-5 border bg-[#9c36b5]">
            <button className="w-full h-full"  onClick={() => setPadrao("#9c36b5")}></button>
        </div>
        <div className="button w-5 h-5 border bg-black">
            <button className="w-full h-full"  onClick={() => setPadrao("#000")}></button>
        </div>
        <div className="button w-5 h-5 border bg-[#FFF]">
            <button className="w-full h-full" onClick={() => setPadrao("#FFF")}></button>
        </div>
    </div>
   </div>
   )
}
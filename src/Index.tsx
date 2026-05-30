import { useState } from "react";
import { nav } from "./data/data";

export default function Index(){
  const [activeNav, setActiveNav] = useState<string>('bazar');
  return(
    <div className="w-screen h-screen flex flex-col items-center py-5">
      <div id="img-nav" className="flex flex-row gap-x-3 flex-wrap gap-y-3 no-copy">
        {nav.map((value, index)=>{
          return(
            <button key={index} onClick={()=>setActiveNav(value)} 
                    className={activeNav===value ? 'nav-btn-active' : 'nav-btn'}>
              {value}
            </button>
          )
        })}
      </div>
    </div>
  )
}
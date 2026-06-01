import { bazar_nav } from "../data/data";
import type { INav } from "./components";

export const NavBazar = ({activeNav, setActiveNav}:INav)=>{
    
    return(
        <div id="img-nav-bazar" className="flex flex-row gap-x-3 flex-wrap gap-y-3 no-copy pt-3">
            {bazar_nav.map((value, index)=>{
                return(
                <button key={index} onClick={()=>setActiveNav(value)} 
                        className={activeNav===value ? 'btn-active' : 'btn'}>
                    {value}
                </button>
                )
            })}
        </div>
    )
};
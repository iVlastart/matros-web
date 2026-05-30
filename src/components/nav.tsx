    import { nav } from "../data/data";
    import type { INav } from "./components";


    export const Nav = ({activeNav, setActiveNav}:INav)=>{
        return(
            <div id="img-nav" className="flex flex-row gap-x-3 flex-wrap gap-y-3 no-copy">
                {nav.map((value, index)=>{
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
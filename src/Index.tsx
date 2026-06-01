import { useState } from "react";
import { Nav } from "./components/nav";
import { NavBazar } from "./components/nav-bazar";
import ImgGrid from "./components/img-grid";
import { bazar, medialni_web } from "./data/data";

const imageCollections: Record<string, any[]> = {
  "mediální web": medialni_web,
  "bazar": bazar,
};

export default function Index(){
  const [activeNav, setActiveNav] = useState<string>('bazar');
  const [activeBazarNav, setActiveBazarNav] = useState<string>('vše');
  return(
    <div className="w-screen h-screen flex flex-col items-center py-5">
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
      {activeNav==='bazar'&&<NavBazar activeNav={activeBazarNav} setActiveNav={setActiveBazarNav} />}
      <ImgGrid images={imageCollections[activeNav]||[]} folder={activeNav} />
    </div>
  )
}
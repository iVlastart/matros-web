import { useState } from "react";
import { Nav } from "./components/nav";
import ImgGrid from "./components/img-grid";
import { bazar, medialni_web, seznamka } from "./data/data";

const imageCollections: Record<string, any[]> = {
  "medialní web": medialni_web,
  "bazar": bazar,
  "seznamka": seznamka,
};

export default function Index(){
  const [activeNav, setActiveNav] = useState<string>('bazar');
  return(
    <div className="w-screen h-screen flex flex-col items-center py-5 overflow-hidden">
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
      <ImgGrid images={imageCollections[activeNav]||[]} folder={activeNav} />
    </div>
  )
}
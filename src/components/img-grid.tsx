import type { IImgGrid } from "./components";

export default function ImgGrid({images, folder}:IImgGrid){
    if(folder === 'mediální web') folder = 'medialni_web';
    return(
        <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-4">
            {images.map((img, key)=>{
                return(
                    <div className="">
                        <img src={`https://raw.githubusercontent.com/iVlastart/matro-/main/${folder}/${img.img}.png`}
                            className="w-full object-cover"/>
                    </div>
                )
            })}
        </div>
    )
}
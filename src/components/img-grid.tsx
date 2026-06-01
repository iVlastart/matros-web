import type { IImgGrid } from "./components";

export default function ImgGrid({images, folder}:IImgGrid){
    if(folder === 'mediální web') folder = 'medialni_web';
    return(
        <div>
            {images.map((img, key)=>{
                return(
                    <div>
                        <img src={`https://raw.githubusercontent.com/iVlastart/matro-/main/${folder}/${img.img}.png`}/>
                    </div>
                )
            })}
        </div>
    )
}
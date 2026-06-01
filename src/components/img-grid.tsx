import { useState } from "react";
import type { IImgGrid } from "./components";

export default function ImgGrid({ images, folder }: IImgGrid) {
    const [selectedImage, setSelectedImage] = useState<string>('');

    if (folder === "medialní web") folder = "medialni_web";

    return (
        <>
            <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-4 py-3 overflow-y-scroll overflow-x-hidden  ">
                {images.map((img, key) => {
                    const imageUrl = `https://raw.githubusercontent.com/iVlastart/matro-/main/${folder}/${img.img}.png`;

                    return (
                        <div key={key}>
                            <img
                                src={imageUrl}
                                className="w-full object-cover aspect-video cursor-pointer hover:scale-105 transition"
                                onClick={() => setSelectedImage(imageUrl)}
                            />
                        </div>
                    );
                })}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage('')}
                >
                    <img
                        src={selectedImage}
                        className="max-w-[90vw] max-h-[90vh] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}
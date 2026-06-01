export interface INav {
    activeNav: string;
    setActiveNav: React.Dispatch<React.SetStateAction<string>>;
}

interface Image{
    img: string;
    type:strnig
}
export interface IImgGrid{
    images: Image[];
    folder: string;
}
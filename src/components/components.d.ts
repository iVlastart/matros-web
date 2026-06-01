export interface INav {
    activeNav: string;
    setActiveNav: React.Dispatch<React.SetStateAction<string>>;
}

interface Image{
    img: string;
}
export interface IImgGrid{
    images: Image[];
    folder: string;
}
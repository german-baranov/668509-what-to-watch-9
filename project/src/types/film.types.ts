export interface IPromoFilm extends IFilm{
    year: number;
    genre: string;
}

export interface IFilm {
    title: string;
    imgSrc: string;
    id: number;
}

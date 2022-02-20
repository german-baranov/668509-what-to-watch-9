import { IFilm, IPromoFilm } from './film.types';
import { IGenre } from './genre.types';

export interface IAppStore {
    filmsList: IFilm[];
    genresList: IGenre[];
    promoFilm: IPromoFilm;
  }

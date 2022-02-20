import {PromoFilm} from '../promo-film/promo-film';
import {Catalog} from '../catalog/catalog';
import { IAppStore } from '../../types/appstore.types';

export function Main ({filmsList, genresList, promoFilm}: IAppStore) : JSX.Element {
  return (
    <>
      <PromoFilm {...promoFilm}/>
      <Catalog filmsList={filmsList} genresList={genresList}/>
    </>
  );

}

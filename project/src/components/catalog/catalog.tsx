import { IFilm } from '../../types/film.types';
import { IGenre } from '../../types/genre.types';
import {Footer} from '../footer/footer';
import {GenresList} from '../genres/genres-list';
import {FilmsList} from '../films/films-list';

interface FilmsProps {
  filmsList: IFilm[];
  genresList: IGenre[];
}

export function Catalog({genresList, filmsList}: FilmsProps): JSX.Element {
  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList genresList={genresList}/>
        <FilmsList filmsList={filmsList}/>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <Footer />

    </div>
  );
}

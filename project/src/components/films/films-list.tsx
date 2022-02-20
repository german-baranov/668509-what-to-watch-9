import {IFilm} from '../../types/film.types';
import { Film } from './film';

type FilmsListProps = {
  filmsList: IFilm[]
}

export function FilmsList ({filmsList}: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        filmsList.map(({id, ...filmProps}) => (
          <Film key={id} {...filmProps}/>
        ))
      }
    </div>
  );
}

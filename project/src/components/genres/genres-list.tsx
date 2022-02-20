import {IGenre} from '../../types/genre.types';
import { Genre } from './genre';

type GenresListProps = {
  genresList: IGenre[]
}

export function GenresList ({genresList}: GenresListProps): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {
        genresList.map(({id, ...genreProps}) => (
          <Genre key={id} {...genreProps}/>
        ))
      }
    </ul>
  );
}

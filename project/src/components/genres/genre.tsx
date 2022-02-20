import { IGenre } from '../../types/genre.types';

type GenreProps = Omit<IGenre, 'id'>;

export function Genre ({name, isActive}: GenreProps): JSX.Element {
  return (
    <li className="catalog__genres-item">
      <a href="#" className={`catalog__genres-link${  isActive ? ' catalog__genres-item--active' : ''}`}>{name}</a>
    </li>
  );
}

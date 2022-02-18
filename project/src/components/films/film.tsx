import { IFilm } from '../../types/film.types';

type FilmProps = Omit<IFilm, 'id'>;

export function Film ({imgSrc,title}: FilmProps):JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={`img\\${imgSrc}.jpg`} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}

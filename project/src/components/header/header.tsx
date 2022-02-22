import {Logo} from '../logo/logo';
import {UserBlock} from '../user-block/user-block';

type HeaderProps = {
  title?: string;
  isSigned?: boolean;
  hasNavigation?: boolean;
}

export function Header ({isSigned, title, hasNavigation}: HeaderProps): JSX.Element {

  return (
    <header className="page-header user-page__head">
      <Logo/>
      {
        hasNavigation &&
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a href="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link">Add review</a>
          </li>
        </ul>
      </nav>
      }
      {title && <h1 className="page-title user-page__title">title</h1>}
      <UserBlock isSigned={isSigned}/>
    </header>
  );
}

import {Link} from 'react-router-dom';
import { Footer } from '../footer/footer';
import {Header} from '../header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Header/>
      <section>
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
      <Footer/>
    </>
  );
}

export default NotFoundScreen;

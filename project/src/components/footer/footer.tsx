import {Logo} from '../logo/logo';

export function Footer (): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo light/>
      <div className="copyright">
        <p>© 2022 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

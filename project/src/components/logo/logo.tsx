type LogoProps = {
    light?: boolean;
}

export function Logo ({light}: LogoProps): JSX.Element {
  return (
    <div className="logo">
      <a href="main.html" className={`logo__link${light ? ' logo__link--light' : ''}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

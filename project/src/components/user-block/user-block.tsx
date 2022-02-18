import React from 'react';

type UserBlockProps = {
    isSigned: boolean;
}

export function UserBlock ({isSigned}: UserBlockProps) { // cant return null with :JSX.Element. why?
  if (!isSigned)    {return (null);}
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}

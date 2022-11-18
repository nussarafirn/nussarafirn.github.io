import React from 'react';

type NavButton = {
  href: string;
  children: React.ReactNode;
}

function NavButton({href, children}: NavButton) {
  return <nav className="button">
    <a className="button link" href={href}>
      {children}
    </a>
  </nav>;
}

export default NavButton;
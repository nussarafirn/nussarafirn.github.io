import React from 'react';

type NavButton = {
  href: string;
  children: React.ReactNode;
}

function NavButton({href, children}: NavButton) {
  return <nav className="button">
    <span>
      <a
        className="button"
        href={href}
        style={{color: "black"}}
      >
        {children}
      </a>
    </span>
  </nav>;
}

export default NavButton;
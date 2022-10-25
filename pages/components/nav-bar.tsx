import React from 'react';
import Firn from './firn';
import NavButton from './nav-button';

function NavBar() {
  return <div className="nav-bar"> 
    <Firn/>
    <div className="nav-menu">
      <NavButton href="./work">Work</NavButton>
      <NavButton href="./pub">Publications</NavButton>
      <NavButton href="./blog">Blog</NavButton>
      <NavButton href="https://nussarafirn.github.io/resume/">CV</NavButton>
    </div>
  </div>;
}

export default NavBar;
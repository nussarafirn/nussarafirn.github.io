import React from 'react';
import Firn from './firn';
import NavButton from './nav-button';

function NavBar() {
  return <div className="nav-bar"> 
    <Firn/>
    <div className="nav-menu">
      {/* <NavButton href="./work.html">Work</NavButton>
      <NavButton href="./pub.html">Publications</NavButton>
      <NavButton href="./blog.html">Blog</NavButton> */}
      {/* <NavButton href="https://nussarafirn.github.io/resume/">CV</NavButton> */}
      <NavButton href="./cv.html">CV</NavButton>
    </div>
  </div>;
}

export default NavBar;

import React, {useState} from 'react';
import Blog from './Blog';
import Work from './Work';
import home from './Home';
import Social from '../components/social';
import Firn from '../components/firn';

function App() {
  const [page, setPage] = useState<JSX.Element>(home);

  function clickNav(p: JSX.Element) {
    setPage(p)
  }

  return (
    <div className="App">
      <div className="nav-bar"> 
        <Firn onClick={() => clickNav(home())}/>

        <div className="nav-menu">
          <nav
            className="button"
            onClick={() => clickNav(Work())}
          ><span>Work</span></nav>
          <nav
            className="button"
            onClick={() => clickNav(Blog())}
          ><span>Blog</span></nav>
          <nav className="button"><span><a
            className="button"
            href="https://nussarafirn.github.io/resume/"
            style={{
              color: "black",
            }}
          >CV</a></span></nav>
        </div>
      </div>
      <Social />
      {page}
    </div>
  );
}

export default App;

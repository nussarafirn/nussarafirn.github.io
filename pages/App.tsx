import React, {useEffect, useState} from 'react';
import Blog from './pages/Blog';
import Work from './pages/Work';
import home from './pages/Home';
import useDencrypt from './dencrypt'

const values = ["Firn", "Nussara Tieanklin", "นุสรา เตี้ยนกลิ่น", "เฟิร์น"];

function App() {
  const [page, setPage] = useState<JSX.Element>(home);

  const { result, dencrypt } = useDencrypt();

  useEffect(() => {
    let i = 0;

    const decryptValue = () => {
      dencrypt(values[i]);
      i = (i + 1) % values.length;
    }

    decryptValue();
    const action = setInterval(decryptValue, 5500);

    return () => clearInterval(action);
  }, [dencrypt]);
  


  function clickNav(p: JSX.Element) {
    setPage(p)
  }

  return (
    <div className="App">
      <div className="nav-bar"> 
        <div className="home-button button" onClick={() => clickNav(home())}>
          <img
            src="./img/fern.png"
            style={{height: "25px", width: "auto"}}
            alt="fern"
          />
          {result}
        </div>

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
      {page}
    </div>
  );
}

export default App;

import React, {useEffect, useState} from 'react';
import Blog from './pages/Blog';
import Work from './pages/Work';
import home from './pages/Home';
import useDencrypt from './dencrypt'
import Image from 'next/image';

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
          <Image
            src="img/fern.png"
            alt="fern"
            width={25}
            height={25}
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

      <div className="wrapper">
        <a href="#" className="icon facebook">
          <div className="tooltip">Facebook</div>
          <span><i className="fab fa-facebook-f"></i></span>
        </a>
        <a href="#" className="icon twitter">
          <div className="tooltip">Twitter</div>
          <span><i className="fab fa-twitter"></i></span>
        </a>
        <a href="#" className="icon instagram">
          <div className="tooltip">Instagram</div>
          <span><i className="fab fa-instagram"></i></span>
        </a>
        <a href="#" className="icon github">
          <div className="tooltip">Github</div>
          <span><i className="fab fa-github"></i></span>
        </a>
        <a href="#" className="icon youtube">
          <div className="tooltip">Youtube</div>
          <span><i className="fab fa-youtube"></i></span>
        </a>
      </div>
      {page}
    </div>
  );
}

export default App;

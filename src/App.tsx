import React, {useState} from 'react';
import Me from './pages/Me';
import Blog from './pages/Blog';
import Work from './pages/Work';
import Home from './pages/Home';
import useDencrypt from './dencrypt'

const values = ["Firn", "Nussara Tieanklin", "นุสรา เตี้ยนกลิ่น", "เฟิร์น"];

function App() {
  const [page, setPage] = useState<JSX.Element>(Home);

  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const decryptValue = () => {
      dencrypt(values[i]);
      i = (i + 1) % values.length;
    }

    decryptValue();
    const action = setInterval(decryptValue, 5500);

    return () => clearInterval(action);
  }, []);
  


  function clickNav(p: JSX.Element) {
    setPage(p)
  }

  return (
    <div className="App">
      <div className="nav-bar"> 
        <div className="home-button button" onClick={() => clickNav(Home())}>
          <img src="./img/fern.png" style={{height: "25px", width: "auto"}} />
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
           <nav
            className="button"
            onClick={() => clickNav(Me())}
          ><span>Me</span></nav>
        </div>

      </div>
      {page}
    </div>
  );
}

export default App;

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
          {/* <span><i className="fab fa-youtube"></i></span> */}
          <span> <svg width="{{.size}}" height="{{.size}}" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" aria-hidden ="true" role ="img">
  <path d="M102.679 0H12.32C5.52 0 0 5.519 0 12.321v90.358C0 109.48 5.519 115 12.321 115h90.358c6.802 0 12.321-5.519 12.321-12.321V12.32C115 5.52 109.481 0 102.679 0zM71.182 98.494c-2.156.385-2.952-.95-2.952-2.053 0-1.386.051-8.471.051-14.195 0-4.005-1.335-6.546-2.9-7.881C74.878 73.313 84.89 72.003 84.89 55.6c0-4.671-1.669-7.007-4.39-10.01.436-1.105 1.9-5.648-.436-11.552-3.568-1.104-11.731 4.595-11.731 4.595-3.389-.95-7.06-1.438-10.679-1.438-3.62 0-7.29.488-10.679 1.438 0 0-8.163-5.699-11.73-4.595-2.337 5.878-.899 10.422-.437 11.551-2.72 3.004-4.004 5.34-4.004 10.011 0 16.326 9.574 17.712 19.072 18.765-1.232 1.104-2.336 3.003-2.72 5.724-2.44 1.104-8.677 3.004-12.4-3.568-2.335-4.056-6.545-4.39-6.545-4.39-4.159-.05-.282 2.619-.282 2.619 2.772 1.283 4.723 6.212 4.723 6.212 2.49 7.624 14.4 5.057 14.4 5.057 0 3.568.052 9.37.052 10.422 0 1.104-.77 2.438-2.952 2.053C27.21 92.821 15.35 76.701 15.35 57.86c0-23.564 18.02-41.456 41.585-41.456s42.663 17.892 42.663 41.456c.026 18.842-11.474 34.988-28.416 40.635zM46 82.81c-.488.103-.95-.102-1.001-.436-.051-.385.282-.719.77-.822.488-.05.95.154 1.001.488.077.334-.257.668-.77.77zm-2.439-.23c0 .333-.385.615-.898.615-.565.052-.95-.23-.95-.616 0-.333.385-.616.899-.616.487-.051.95.231.95.616zm-3.516-.283c-.103.334-.616.488-1.053.334-.488-.103-.821-.488-.719-.822.103-.334.617-.488 1.053-.385.513.154.847.54.719.873zm-3.158-1.386c-.23.282-.718.23-1.104-.154-.385-.334-.487-.822-.23-1.053.23-.282.718-.23 1.103.154.334.334.462.847.231 1.053zm-2.336-2.336c-.23.154-.667 0-.95-.385-.282-.385-.282-.822 0-1.001.283-.231.72-.052.95.333.283.385.283.847 0 1.053zm-1.668-2.49c-.231.23-.616.103-.899-.154-.282-.334-.333-.719-.102-.899.23-.23.616-.102.898.154.282.334.334.72.103.899zm-1.72-1.9c-.103.231-.436.283-.719.103-.334-.154-.488-.436-.385-.667.103-.154.385-.231.719-.103.334.18.488.462.385.667z"/>
  </svg></span>
        </a>


        {/* <div class="icon">
          {{if eq .iconName "github" }}
          <svg width="{{.size}}" height="{{.size}}" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" aria-hidden ="true" role ="img">
          <path d="M102.679 0H12.32C5.52 0 0 5.519 0 12.321v90.358C0 109.48 5.519 115 12.321 115h90.358c6.802 0 12.321-5.519 12.321-12.321V12.32C115 5.52 109.481 0 102.679 0zM71.182 98.494c-2.156.385-2.952-.95-2.952-2.053 0-1.386.051-8.471.051-14.195 0-4.005-1.335-6.546-2.9-7.881C74.878 73.313 84.89 72.003 84.89 55.6c0-4.671-1.669-7.007-4.39-10.01.436-1.105 1.9-5.648-.436-11.552-3.568-1.104-11.731 4.595-11.731 4.595-3.389-.95-7.06-1.438-10.679-1.438-3.62 0-7.29.488-10.679 1.438 0 0-8.163-5.699-11.73-4.595-2.337 5.878-.899 10.422-.437 11.551-2.72 3.004-4.004 5.34-4.004 10.011 0 16.326 9.574 17.712 19.072 18.765-1.232 1.104-2.336 3.003-2.72 5.724-2.44 1.104-8.677 3.004-12.4-3.568-2.335-4.056-6.545-4.39-6.545-4.39-4.159-.05-.282 2.619-.282 2.619 2.772 1.283 4.723 6.212 4.723 6.212 2.49 7.624 14.4 5.057 14.4 5.057 0 3.568.052 9.37.052 10.422 0 1.104-.77 2.438-2.952 2.053C27.21 92.821 15.35 76.701 15.35 57.86c0-23.564 18.02-41.456 41.585-41.456s42.663 17.892 42.663 41.456c.026 18.842-11.474 34.988-28.416 40.635zM46 82.81c-.488.103-.95-.102-1.001-.436-.051-.385.282-.719.77-.822.488-.05.95.154 1.001.488.077.334-.257.668-.77.77zm-2.439-.23c0 .333-.385.615-.898.615-.565.052-.95-.23-.95-.616 0-.333.385-.616.899-.616.487-.051.95.231.95.616zm-3.516-.283c-.103.334-.616.488-1.053.334-.488-.103-.821-.488-.719-.822.103-.334.617-.488 1.053-.385.513.154.847.54.719.873zm-3.158-1.386c-.23.282-.718.23-1.104-.154-.385-.334-.487-.822-.23-1.053.23-.282.718-.23 1.103.154.334.334.462.847.231 1.053zm-2.336-2.336c-.23.154-.667 0-.95-.385-.282-.385-.282-.822 0-1.001.283-.231.72-.052.95.333.283.385.283.847 0 1.053zm-1.668-2.49c-.231.23-.616.103-.899-.154-.282-.334-.333-.719-.102-.899.23-.23.616-.102.898.154.282.334.334.72.103.899zm-1.72-1.9c-.103.231-.436.283-.719.103-.334-.154-.488-.436-.385-.667.103-.154.385-.231.719-.103.334.18.488.462.385.667z"/>
          </svg>
          {{else if eq .iconName "googlescholar"}}
        <svg width="{{.size}}" height="{{.size}}" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" aria-hidden ="true" role ="img">
        <path d="M10.93 2.045c-.547.366-3.22 2.14-5.938 3.945C2.272 7.794.05 9.286.05 9.304c0 .019.136.11.305.2.167.096 2.85 1.583 5.965 3.31l5.656 3.143.144-.074c.082-.04 2.169-1.232 4.642-2.642l4.493-2.568.027 7.947h2.668V9.319l-3.46-2.32c-4.664-3.124-8.392-5.586-8.484-5.606-.045-.008-.527.287-1.076.652M5.355 16.633l.014 2.005 3.31 1.987 3.31 1.982 3.337-2 3.332-2.005V16.62c0-1.092-.013-1.983-.027-1.983s-1.318.782-2.9 1.741l-3.306 1.996-.431.256-1.32-.791a604.12 604.12 0 0 1-3.286-1.979l-2.005-1.21c-.024-.008-.032.883-.027 1.983" />
          </svg>
          {{else  if eq .iconName "instagram" }}
          <svg width="{{.size}}" height="{{.size}}" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" aria-hidden ="true" role ="img">
          <path d="M57.526 28.111c-16.254 0-29.364 13.11-29.364 29.363 0 16.254 13.11 29.364 29.364 29.364 16.253 0 29.363-13.11 29.363-29.364 0-16.253-13.11-29.363-29.363-29.363zm0 48.453c-10.504 0-19.09-8.56-19.09-19.09 0-10.528 8.56-19.09 19.09-19.09 10.528 0 19.09 8.562 19.09 19.09 0 10.53-8.587 19.09-19.09 19.09zM94.939 26.91a6.833 6.833 0 0 1-6.849 6.849 6.833 6.833 0 0 1-6.849-6.849 6.85 6.85 0 0 1 13.698 0zm19.448 6.951c-.435-9.174-2.53-17.301-9.251-23.997C98.44 3.17 90.313 1.074 81.139.614c-9.456-.537-37.797-.537-47.252 0-9.15.434-17.276 2.53-23.997 9.225S1.099 24.66.639 33.836c-.537 9.455-.537 37.796 0 47.252.434 9.174 2.53 17.3 9.251 23.996 6.721 6.696 14.822 8.792 23.997 9.252 9.455.536 37.796.536 47.252 0 9.174-.435 17.301-2.53 23.997-9.252 6.695-6.695 8.79-14.822 9.25-23.996.537-9.456.537-37.771 0-47.227zM102.17 91.233c-1.993 5.01-5.852 8.868-10.887 10.887-7.538 2.99-25.427 2.3-33.758 2.3-8.332 0-26.246.664-33.76-2.3-5.008-1.993-8.867-5.852-10.886-10.887-2.99-7.539-2.3-25.427-2.3-33.759 0-8.33-.664-26.245 2.3-33.758 1.993-5.01 5.852-8.868 10.887-10.887 7.539-2.99 25.427-2.3 33.759-2.3 8.33 0 26.245-.665 33.758 2.3 5.01 1.993 8.868 5.852 10.887 10.887 2.99 7.538 2.3 25.427 2.3 33.758 0 8.332.69 26.246-2.3 33.76z" />
          </svg>
          {{else if eq .iconName "linkedin" }}
        <svg width="{{.size}}" height="{{.size}}" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" aria-hidden ="true" role ="img">
          <path d="M106.786 0H8.189C3.67 0 0 3.722 0 8.291v98.418C0 111.278 3.67 115 8.189 115h98.597c4.518 0 8.214-3.722 8.214-8.291V8.29C115 3.722 111.304 0 106.786 0zm-72.03 98.571H17.713V43.69h17.07V98.57h-.025zm-8.522-62.377c-5.467 0-9.882-4.44-9.882-9.883 0-5.442 4.415-9.882 9.882-9.882 5.442 0 9.883 4.44 9.883 9.882a9.87 9.87 0 0 1-9.883 9.883zm72.414 62.377H81.604V71.875c0-6.366-.129-14.555-8.856-14.555-8.882 0-10.242 6.931-10.242 14.093V98.57H45.46V43.69h16.352v7.495h.23c2.285-4.312 7.855-8.856 16.147-8.856 17.25 0 20.458 11.372 20.458 26.158V98.57z"/>
        </svg>
          {{else if eq .iconName "twitter" }}
        <svg width="{{.size}}" height="{{.size}}" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="false" role="img">
        <path d="M102.679 0H12.32C5.52 0 0 5.519 0 12.321v90.358C0 109.48 5.519 115 12.321 115h90.358c6.802 0 12.321-5.519 12.321-12.321V12.32C115 5.52 109.481 0 102.679 0zM90.126 40.763c.051.72.051 1.464.051 2.182 0 22.256-16.942 47.9-47.9 47.9-9.548 0-18.404-2.772-25.848-7.547 1.36.154 2.67.205 4.055.205 7.881 0 15.12-2.67 20.895-7.187-7.392-.154-13.604-5.006-15.735-11.68 2.593.385 4.929.385 7.598-.308a16.837 16.837 0 0 1-13.476-16.531v-.205a16.824 16.824 0 0 0 7.598 2.13 16.8 16.8 0 0 1-7.496-14.016c0-3.131.822-6.006 2.285-8.496a47.803 47.803 0 0 0 34.705 17.61c-2.387-11.424 6.161-20.69 16.429-20.69 4.851 0 9.215 2.027 12.296 5.313a32.99 32.99 0 0 0 10.678-4.056 16.792 16.792 0 0 1-7.393 9.267c3.389-.36 6.674-1.31 9.703-2.618a35.437 35.437 0 0 1-8.445 8.727z"/>
        {{end}}
        </svg>
        </div> */}




      </div>
      {page}
    </div>
  );
}

export default App;

import type { NextPage } from 'next'
import CV from './components/page';
import reportWebVitals from './reportWebVitals'

const Home: NextPage = () => {
  return <CV title="CV | Nussara 'Firn' Tieanklin">
    <div className="button-cv-wrap">
      <div className="button-cv">
        <a href="http://nussarafirn.github.io/resume">
          Download CV
        </a>
      </div>
    </div>
    <iframe
      src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://nussarafirn.github.io/resume/resume.pdf#toolbar=0&scrollbar=0"
      frameBorder="0"
      scrolling="auto"
      height="1000px"
      width="100%"
    ></iframe>
  </CV>
}

reportWebVitals();

export default Home

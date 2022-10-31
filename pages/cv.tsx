import type { NextPage } from 'next'
import CV from './components/page';
import reportWebVitals from './reportWebVitals'

const Home: NextPage = () => {
  return <CV title="CV | Nussara 'Firn' Tieanklin">
    <object
      data="https://nussarafirn.github.io/resume"
      type="application/pdf"
      width="100%"
      height="1000px"
    >
      <p>Here is my <a href="https://nussarafirn.github.io/resume">CV</a></p>
    </object>
  </CV>
}

reportWebVitals();

export default Home

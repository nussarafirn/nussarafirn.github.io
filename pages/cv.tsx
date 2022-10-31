import type { NextPage } from 'next'
import CV from './components/page';
import reportWebVitals from './reportWebVitals'

const Home: NextPage = () => {
  return <CV title="CV | Nussara 'Firn' Tieanklin">
    <embed
      src="https://nussarafirn.github.io/resume"
      type="application/pdf"
      width="100%"
      height="1000px"
    />
  </CV>
}

reportWebVitals();

export default Home

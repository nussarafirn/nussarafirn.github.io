import type { NextPage } from 'next'
import Page from './components/page';
import reportWebVitals from './reportWebVitals'

const Home: NextPage = () => {
  return <Page title="Blog | Nussara 'Firn' Tieanklin">
    Personal Blog Posts!!
  </Page>
}

reportWebVitals();

export default Home

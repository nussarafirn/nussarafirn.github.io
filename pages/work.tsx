import type { NextPage } from 'next'
import reportWebVitals from './reportWebVitals'
import Experience from './components/cards/experience'
import Page from './components/page';

const Home: NextPage = () => {
  return <Page title="Work | Nussara 'Firn' Tieanklin">
    <h1>Experience</h1>
    <Experience
      title="Graduate Student Research Assistant for Information and Communication Technology for Development (ICTD)"
      affiliation='Paul G. Allen School of Computer Science & Engineering'
      date='06/2021 - present'
      description={[
        'Collaborate in community outreach, equipment deployment, and troubleshooting on the open-sourced Community Cellular (LTE) Network project to bring affordable high-speed connectivity to lower-income neighborhoods in the South Seattle and Tacoma area.',
        'Analyze how PM 2.5 air pollution impacts Grab drivers\' strategies and income in Southeast Asia. (in partnership with Grab Holding Inc.)',
        'Analyze the impact of COVID-19 on the Community Cellular Networks\'s internet traffic and transactions in Bokondini, Indonesia. (proceeding to ACM COMPASS \'21)'
      ]}
      thumbnail='img/cse.png'
      left
    />
    <h1>Projects</h1>
  </Page>;
}

reportWebVitals();

export default Home

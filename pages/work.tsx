import type { NextPage } from 'next'
import reportWebVitals from './reportWebVitals'
import Experience from './components/cards/experience'
import Page from './components/page';

const Home: NextPage = () => {
  return <Page title="Work | Nussara 'Firn' Tieanklin">
    <h1>Experience</h1>
        <Experience
          title="Graduate Student Research Assistant for Information and Communication Technology for Development (ICTD)"
          affiliation='Paul G. Allen School of Computer Science and Engineering'
          date='06/2021 - present'
          description={[
            'Applies mixed-methods research to analyze how the air pollution impacts motorcycle-taxi Grab workers\' strategies and income in Southeast Asia. (in partnership with Grab Holding Inc.)',
            'Collaborate in community outreach, equipment deployment, and troubleshooting on the open-sourced Community Cellular (LTE) Network project to bring affordable high-speed connectivity to lower-income neighborhoods in South Seattle and Tacoma area.',
            'mtunzi, a system for software-defined network access control and captive networking aimed toward the networking needs of small WISPs and community network operators.',
            'Analyze the impact of COVID-19 on the Community Cellular Networks\'s internet traffic and transactions in Bokondini, Indonesia. (proceeding to ACM COMPASS 2021)'
          ]}
          thumbnail='img/cse.png'
          left
        />

      <Experience
          title="Undergraduate Student Research Assistant"
          affiliation='School of Engineering and Technology (UWT)'
          date='03/2020 - 06/2021'
          description={[
            'Interpret decision making behind Deep Learning models and decompress in order to have them operate in IoT devices efficiently, such as mobiles and tablets, to detect and block Domain Generation Algorithm (DGA) malwares with Infobox company under supervision of Prof. Juhua Hu.'
          ]}
          thumbnail='img/cse.png'
          left
        />

      <Experience
          title="Research Intern for Aarhus City Lab"
          affiliation='ITK Department at DOKK1 in Århus, Denmark'
          date='05/2022 - 07/2022'
          description={[
            'Applied Data Science practices analyzing the impact of cruise emissions and used Deep Learning for time series forecasting on the air quality of the second largest city of Denmark, Århus.',
            ' This work is a collaboration with the Aarhus City Lab team, ITK department at DOKK1 (Århus, Denmark). A media coverage for the work: \href{https://itk.aarhus.dk/nyheder/projektnyheder/krydstogtskibe/cruise-ships/}{itk.aarhus.dk/nyheder/projektnyheder/krydstogtskibe/cruise-ships/}. More information, please visit github.com/nussarafirn/aarhus-aqi.'
          ]}
          thumbnail='img/cse.png'
          left
        />

      <Experience
          title="{Graduate and Undergraduate Teaching Assistant"
          affiliation='Paul G. Allen School of Computer Science and Engineering'
          date='09/2020 - Present'
          description={[
            'Applied Data Science practices analyzing the impact of cruise emissions and used Deep Learning for time series forecasting on the air quality of the second largest city of Denmark, Århus.',
            ' This work is a collaboration with the Aarhus City Lab team, ITK department at DOKK1 (Århus, Denmark). A media coverage for the work: \href{https://itk.aarhus.dk/nyheder/projektnyheder/krydstogtskibe/cruise-ships/}{itk.aarhus.dk/nyheder/projektnyheder/krydstogtskibe/cruise-ships/}. More information, please visit github.com/nussarafirn/aarhus-aqi.'
          ]}
          thumbnail='img/cse.png'
          left
        />



      <h1>Teaching Expereince</h1>

      <h1>Projects</h1>


      <h1>Extra Cirricular</h1>
  </Page>;
}

reportWebVitals();

export default Home

import type { NextPage } from 'next'
import reportWebVitals from './reportWebVitals'
import Picture from './components/picture'
import Page from './components/page';

const Home: NextPage = () => {
  return <Page title="Nussara 'Firn' Tieanklin">
    <div className='profile-wrapper'>
      <Picture
        className='img-mask'
        containerClassName='profile-img-container'
        src='img/nussara_headshot.jpg'
        alt='firn'
        width={300}
      />
      
      <div style={{textAlign: 'justify', fontFamily: 'DM Sans'}}>
        <h1> Hello, <span>Firn</span> is here!</h1>

        <p>
          I&apos;m Nussara Tieanklin or Firn.
          I am a second-year Ph.D. Student, advised by <a href='https://kurti.sh/' className='button link'>
            Professor Kurtis Heimerl</a> in the <a href='https://ictd.cs.washington.edu' className='button link'>Information
          and Communication Technology for Development (ICTD) Lab </a> at 
          Paul G. Allen School of Compuer Science and Engineering,
          University of Washington (Seattle, WA).
        </p>
        <p>
          My research interests lie within the umbrella of Data Science for Social Good using
          mixed methods research and machine learning approach.
          The current research in the area is included but not limited to analyzing
          the effects of air pollution on the motorcycle-taxi Grab workers in Southeast Asia. 
        </p>
        <p>
          I am also interested in using community networks bridging the digital divide.
          As a techno-social lead in the <a href='https://seattlecommunitynetwork.org/' className='button link'>Seattle Community Network</a>, I conduct qualitative researches,
          help with installations, teach technical workshops, and expand community outreach. 
        </p>
      </div>
    </div>
  </Page>;
}

reportWebVitals();

export default Home

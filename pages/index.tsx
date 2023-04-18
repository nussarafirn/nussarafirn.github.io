import type { NextPage } from 'next'
import reportWebVitals from './reportWebVitals'
import Picture from './components/picture'
import Page from './components/page';
import UpdateEntry from './components/update-entry';


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
      
      <div>
        <h1> Hello, <span>Firn</span>'s here!</h1>

        <p>
          I&apos;m Nussara Tieanklin or Firn.
          I am a Ph.D. Student, advised by <a href='https://kurti.sh/' className='button link'>
            Professor Kurtis Heimerl</a> in the <a href='https://ictd.cs.washington.edu' className='button link'>Information
          and Communication Technology for Development (ICTD) Lab </a> at 
          Paul G. Allen School of Computer Science and Engineering,
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
          Aside from helping technical installations and community outreach in the <a href='https://seattlecommunitynetwork.org/' className='button link'>Seattle Community Network</a>, I also conduct qualitative researches,
          help with installations, teach technical workshops, and expand community outreach. 
        </p>

        <p>Let&apos;s exchange ideas and opportunity here at <a href='mailto:nussara@cs.washington.edu' className='button link' style={{fontFamily: 'Courier Prime'}}> nussara [at] cs.washington.edu</a>.</p>
      </div>
    </div>
    <div className='p-4'>
      <h3>
        <span>Latest</span> updates! 
      </h3>
      <ul>
        <UpdateEntry date={new Date('2023-04-17T10:30:00-0700')}>
          I just passed my qualification exam, watch my talk <a className='button link' href='https://youtu.be/qKHkrK63t6U'>here</a>.
        </UpdateEntry>
      </ul>
    </div>
  </Page>;
}

reportWebVitals();

export default Home

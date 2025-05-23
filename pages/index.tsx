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
        <h1> Hello, <span>Firn</span>&apos;s here!</h1>

        <p>
          I&apos;m Nussara Tieanklin or Firn.
          I am a Ph.D. Student, advised by <a href='https://kurti.sh/' className='button link'>
            Professor Kurtis Heimerl</a> in the <a href='https://ictd.cs.washington.edu' className='button link'>Information
          and Communication Technology for Development (ICTD) Lab </a> at 
          Paul G. Allen School of Computer Science and Engineering,
          University of Washington (Seattle, WA).
        </p>
        <p>
          My research interests center on the integration of qualitative study, mixed methods, 
          and machine learning within the broader framework of Data Science for Social Good. 

          
          My recent work examines how chronic air pollution exposure intersects with the economic vulnerability of 
          marginalized population and gig workers, particularly motorcycle rideshare drivers in urban Thailand. 
          I explore how income instability, limited health literacy, and policy neglect shape workers’ ability to 
          manage environmental risks. I also collaborate with local nonprofit organizations to develop 
          public health interventions and advocate for labor policies that recognize and address the lived realities 
          of these vulnerable workers.
          
{/*           I investigate structural determinants of health and environmental justice among marginalized populations, 
          with recent work analyzing the effects of air pollution on motorcycle rideshare drivers in Southeast Asia. 
          Through 7 months-long longitudinal personal exposure monitoring and in-depth qualitative interviews, 
          my research examines how systemic economic pressures and limited worker agency contribute to sustained health 
          risks in the gig economy. */}
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
        <UpdateEntry date={new Date('2024-12-14T10:30:00-0700')}>
        Presented <a className='button link' 
        href='https://dl.acm.org/doi/pdf/10.1145/3653706'>&quot;I will just have to keep driving&quot;: A Mixed-methods Investigation of Lack of Agency within the Thai Motorcycle Rideshare Driver Community</a> at CSCW2024 in Costa Rica!.
        </UpdateEntry>
      </ul> 
      <ul>
        <UpdateEntry date={new Date('2024-05-26T10:30:00-0700')}>
        We have completed collecting 7 months of real-time, hyperlocalized air pollution data 
        from motorcycle taxi drivers in Bangkok and Chiang Mai!
        </UpdateEntry>
      </ul>
      <ul>
        <UpdateEntry date={new Date('2024-04-26T10:30:00-0700')}>
          The work on how financial and social pressures limit Thai motorcycle taxi drivers&apos; 
          autonomy to avoid air pollutions despite on the promsised flexibility of gig work, published at <a className='button link' href='https://dl.acm.org/doi/abs/10.1145/3653706'>CSCW2024</a>!.
        </UpdateEntry>
      </ul>
      <ul>
        <UpdateEntry date={new Date('2023-10-10T10:30:00-0700')}>
          Joined <a className='button link' href='https://www.aerothai.co.th/en/services/air-traffic-flow-management'>AEROTHAI</a> as an Air Traffic Flow Data Officer ᯓ ✈︎
        </UpdateEntry>
      </ul>
      <ul>
        <UpdateEntry date={new Date('2023-07-10T10:30:00-0700')}>
          Spent the summer in Thailand deploying mobile sensors on motorcycles to collect real-time air pollutions!
        </UpdateEntry>
      </ul>
    </div>
  </Page>;
}

reportWebVitals();

export default Home

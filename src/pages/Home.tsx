import React from 'react';
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

function home() {
  return (
    <>
      <img src="img/nussara_headshot.jpg" className='img-mask' width={300} alt="my headshot"></img>
      <p>
        Hello! My name is Nussara Tieanklin or known among friends and family as Firn.
        I am a second-year Ph.D. Student advised by Professor Kurtis Heimerl in Information
        and Communication Technology for Development (ICTD) Lab at Paul G. Allen School,
        University of Washington (Seattle, WA).
      </p>
      <p>
        My research interests lie within the umbrella of Data Science for social goods using
        mixed methods research and various machine learning approaches.
        The current research in computing for Social Good is included but not limited to analyzing
        the effects of air pollution on the motorcycle-taxi Grab workers in Southeast Asia. 
      </p>
      <p>
        I am also interested in using community networks bridging the digital divide.
        As a techno-social lead in the Seattle Community Network, I conduct multiple qualitative researches,
        help with installations, teach technical workshops, and expand community outreach. 
      </p>
    </>

  );

}

export default home;
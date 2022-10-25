import React from 'react';
import Image from 'next/image';
import Picture from './picture';
import { cibGooglesCholar } from '@coreui/icons';

function Social() {
  return (
      <div className="social-wrapper">
        <a href="https://twitter.com/nussarafirn" className="icon twitter">
          <div className="tooltip">Twitter</div>
          <span><i className="fab fa-twitter"></i></span>
        </a>
        <a href="https://github.com/nussarafirn" className="icon github">
          <div className="tooltip">Github</div>
          <span><i className="fab fa-github"></i></span>
        </a>
        <a href="https://www.linkedin.com/in/nussarafirn" className="icon linkedin">
          <div className="tooltip">LinkedIn</div>
          <span><i className="fab fa-linkedin-in"></i></span>
        </a>
        <a href="https://scholar.google.com/citations?hl=en&user=OT49rjwAAAAJ" className="icon google-scholar">
          <div className="tooltip">Google Scholar</div>
          <span> <i className="fab cib-googles-cholar"></i></span>
        </a>
      </div>
  );
}

export default Social;
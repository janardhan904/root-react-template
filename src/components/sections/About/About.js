import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpg';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Company
          </h3>
          <h6 className='section-title mr-auto ml-auto'>
          We're on a mission to simplify and transform IT operations. <br/>
          Control the chaos of modern digital infrastructure - from discovery to remediation.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title'>About us</h3>
              <div className='about-description'>
                <p>
                Manam Solutions founded in 2018 to help solve critical pain points for enterprise IT organizations and the managed service providers (MSPs) that serve them. From on-premises to hybrid IT, multi-cloud, edge computing and shadow IT, it’s a tough world for IT operations teams to manage and optimize. Disconnected point tools miss the point. And stitched together legacy IT operations management (ITOM) suites were not built for the modern era.
                </p>
                <p>
                The Manam IT operations management (MTOM) platform allows you to see everything in your hybrid IT environment, take the right action faster with integrated event and incident management and automate with confidence with AIOps. Learn more about our service-centric AIOps platform.
                </p>
                <p>
                With Manam, you can detect and resolve incidents faster, understand resource dependencies and avoid costly performance issues that result in lost revenue and productivity.
                </p>
                <button className='btn btn-primary rounded-0'>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;

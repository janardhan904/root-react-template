import React from 'react';

import Section from '../../../HOC/Section';

const Service = () => {
  return (
    <Section id='services'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Manam Solutions
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
          
          Discovery. Intelligence. Optimization. Powering IT Operations as a Service.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-briefcase' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>AIOps</h5>
                  <p className='service-description'>
                  AIOps is the shorthand for artificial intelligence for IT operations. 
                  AIOps leverages a broad set of technology approaches, including machine learning, network science, combinatorial optimization and other computational approaches for solving everyday IT operational problems at scale.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-chart-bar' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>IT Operations Management</h5>
                  <p className='service-description'>
                  IT Operations Management (ITOM) is the process and framework for managing an organization’s business-critical applications and underlying hybrid IT infrastructure.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-fist-raised' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Migration</h5>
                  <p className='service-description'>
                  Execute, Test, Track and Accept.
                  Cloud operations teams can dynamically discover and onboard public cloud services across different business units for leading cloud providers
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='far fa-paper-plane' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Market Research</h5>
                  <p className='service-description'>
                  Market research is the process of determining the viability of a new service or product through research conducted directly with potential customers. 
                  Market research allows a company to discover the target market and get opinions and other feedback from consumers about their interest in the product or service.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-gem' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>IT Operations as a Service</h5>
                  <p className='service-description'>
                  Modern IT Operations Management For An Increasingly Complex World.
                  It used to be, with the rise of the digital customer experience, that every company was a software company.
                  This is IT Operations as a Service. It’s the ability to deliver shared IT operations functions at scale to different lines of business within an enterprise.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='far fa-life-ring' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Upscale Your Services</h5>
                  <p className='service-description'>
                  Customer trust and longevity are fundamental for long-term success and recurring revenues. You can combat commoditization by modernizing your tool sets and processes for delivering the value and functionality that your customers require.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;

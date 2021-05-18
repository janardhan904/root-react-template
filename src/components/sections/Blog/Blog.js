import React from 'react';

import Section from '../../../HOC/Section';

import blogImage1 from '../../../assets/img/blog1.jpg';
import blogImage2 from '../../../assets/img/blog2.jpg';
import blogImage3 from '../../../assets/img/blog3.jpg';

const Blog = () => {
  return (
    <Section id='blog'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Blog
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage1} className='card-img-top' alt='Blog 1' />
                <div className='card-body'>
                  <h5 className='card-title'>Hyperautomation</h5>
                  <p className='card-text'>
                  Hyperautomation refers not just to the tasks and processes that can be automated but the level of automation.
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage2} className='card-img-top' alt='Blog 2' />
                <div className='card-body'>
                  <h5 className='card-title'>Seven KPIs for AIOps</h5>
                  <p className='card-text'>
                  Leaders looking to measure the benefits of AIOps and build KPIs for both IT and business audiences should focus on key factors such as uptime, so that potential outages affecting customers can be prevented.
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage3} className='card-img-top' alt='Blog 3' />
                <div className='card-body'>
                  <h5 className='card-title'>IT Operations Metrics</h5>
                  <p className='card-text'>
                  As one of the three pillars of observability, along with logs and traces, digesting metrics is a crucial part of any ITOps admins’ job. 
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;

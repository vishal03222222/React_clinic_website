import React, { Component } from 'react';
import servicesData from './servicesData.json';

class Service extends Component {
  render() {
    const { title, subtitle, services } = servicesData;
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <p className="d-inline-block border rounded-pill py-1 px-4">{subtitle}</p>
            <h1>{title}</h1>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={service.delay}>
                <div className="service-item bg-light rounded h-100 p-5">
                  <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                    <i className={`fa ${service.icon} text-primary fs-4`}></i>
                  </div>
                  <h4 className="mb-3">{service.title}</h4>
                  <p className="mb-4">{service.description}</p>
                  <a className="btn" href="#">
                    <i className="fa fa-plus text-primary me-3"></i>Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Service;

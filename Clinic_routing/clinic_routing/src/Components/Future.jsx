import React, { Component } from 'react';
import futureData from './futureData.json'

class Future extends Component {
  render() {
    const { header, features, image } = futureData;
    return (
      <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="p-lg-5 ps-lg-0">
                <p className="d-inline-block border rounded-pill text-light py-1 px-4">{header.subtitle}</p>
                <h1 className="text-white mb-4">{header.title}</h1>
                <p className="text-white mb-4 pb-2">{header.description}</p>
                <div className="row g-4">
                  {features.map((feature, index) => (
                    <div key={index} className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{ width: 55, height: 55 }}>
                          <i className={`fa ${feature.icon} text-primary`} />
                        </div>
                        <div className="ms-4">
                          <p className="text-white mb-2">{feature.description}</p>
                          <h5 className="text-white mb-0">{feature.title}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: 400 }}>
              <div className="position-relative h-100">
                <img className="position-absolute img-fluid w-100 h-100" src={image.src} style={{ objectFit: 'cover' }} alt={image.alt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Future;

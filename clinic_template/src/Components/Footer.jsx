import React, { Component } from 'react';
import footerData from './footerData.json';

class Footer extends Component {
  render() {
    const { address, services, quickLinks, newsletter, copyright } = footerData;

    return (
      <div>
        <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">{address.title}</h5>
                {address.details.map((item, index) => (
                  <p className="mb-2" key={index}>
                    <i className={`fa ${item.icon} me-3`} />
                    {item.text}
                  </p>
                ))}
                <div className="d-flex pt-2">
                  <a className="btn btn-outline-light btn-social rounded-circle" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-light btn-social rounded-circle" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-social rounded-circle" href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a className="btn btn-outline-light btn-social rounded-circle" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">{services.title}</h5>
                {services.links.map((link, index) => (
                  <a className="btn btn-link" href="#" key={index}>{link}</a>
                ))}
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">{quickLinks.title}</h5>
                {quickLinks.links.map((link, index) => (
                  <a className="btn btn-link" href="#" key={index}>{link}</a>
                ))}
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">{newsletter.title}</h5>
                <p>{newsletter.description}</p>
                <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                  <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                  <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  {copyright.text}
                </div>
                <div className="col-md-6 text-center text-md-end">
                  Designed By <a className="border-bottom" href={copyright.designer.url}>{copyright.designer.text}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    );
  }
}

export default Footer;

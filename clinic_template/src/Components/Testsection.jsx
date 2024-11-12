import React, { Component } from 'react';
import testData from './testData.json';

class Testsection extends Component {
  render() {
    const { header, testimonials } = testData;

    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
            <p className="d-inline-block border rounded-pill py-1 px-4">{header.subtitle}</p>
            <h1>{header.title}</h1>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item text-center">
                <img
                  className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                  src={testimonial.image}
                  alt={`Testimonial from ${testimonial.name}`}
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text rounded text-center p-4">
                  <p>{testimonial.text}</p>
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <span className="fst-italic">{testimonial.profession}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Testsection;

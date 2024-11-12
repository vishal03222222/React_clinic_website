import React, { Component } from 'react';
import aboutData from './aboutData.json';

class About extends Component {
    render() {
        return (
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex flex-column">
                                {aboutData.images.map((image, index) => (
                                    <img
                                        key={index}
                                        className={image.class}
                                        src={image.src}
                                        alt=""
                                        style={image.style || {}}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <p className="d-inline-block border rounded-pill py-1 px-4">{aboutData.subtitle}</p>
                            <h1 className="mb-4">{aboutData.title}</h1>
                            {aboutData.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                            {aboutData.features.map((feature, index) => (
                                <p key={index}><i className="far fa-check-circle text-primary me-3" />{feature}</p>
                            ))}
                            <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href={aboutData.button.link}>{aboutData.button.text}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;

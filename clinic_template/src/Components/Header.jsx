import React, { Component } from 'react';
import headerData from './headerData.json';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid header bg-primary p-0 mb-5">
                <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
                    <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
                        <h1 className="display-4 text-white mb-5">{headerData.title}</h1>
                        <div className="row g-4">
                            {headerData.counters.map((counter, index) => (
                                <div className="col-sm-4" key={index}>
                                    <div className="border-start border-light ps-4">
                                        <h2 className="text-white mb-1" data-toggle="counter-up">{counter.count}</h2>
                                        <p className="text-light mb-0">{counter.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="owl-carousel header-carousel">
                            {headerData.carouselItems.map((item, index) => (
                                <div className="owl-carousel-item position-relative" key={index}>
                                    <img className="img-fluid" src={item.image} alt="" />
                                    <div className="owl-carousel-text">
                                        <h1 className="display-1 text-white mb-0">{item.title}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;

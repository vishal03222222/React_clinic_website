import React, { Component } from 'react';
import navbarData from './navbarData.json';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
                <a href={navbarData.brand.link} className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 className="m-0 text-primary">
                        <i className={`${navbarData.brand.iconClass} me-3`} />{navbarData.brand.name}
                    </h1>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        {navbarData.links.map((link, index) =>
                            link.dropdown ? (
                                <div className={link.class} key={index}>
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{link.name}</a>
                                    <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                                        {link.items.map((item, subIndex) => (
                                            <a href={item.link} className="dropdown-item" key={subIndex}>{item.name}</a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a href={link.link} className={link.class} key={index}>{link.name}</a>
                            )
                        )}
                    </div>
                    <a href="#" className={navbarData.appointmentButton.class}>
                        {navbarData.appointmentButton.name}
                        <i className={`${navbarData.appointmentButton.iconClass} ms-3`} />
                    </a>
                </div>
            </nav>
        );
    }
}

export default Navbar;

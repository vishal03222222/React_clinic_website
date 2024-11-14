
import React, { Component } from 'react'
import toDat from './topDat.json'

class Topsection extends Component {
    render() {
        return (
            <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-map-marker-alt text-primary me-2" />
                            <small>{toDat.string}</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-3">
                            <small className="far fa-clock text-primary me-2" />
                            <small>{toDat.string2}</small>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-phone-alt text-primary me-2" />
                            <small>{toDat.string3}</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href><i className="fab fa-twitter" /></a>
                            <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href><i className="fab fa-linkedin-in" /></a>
                            <a className="btn btn-sm-square rounded-circle bg-white text-primary me-0" href><i className="fab fa-instagram" /></a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Topsection
import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="margin-top-negativo">

            <footer className="text-white text-center text-lg-start stylo2a">

                <div className="container">

                    <div className="row mt-4">

                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4 mt-3">Sobre Mi</h5>

                            <p>
                                Soy un desarrollador de Software Junior, con título de ingeniería en informática, cuento con poca experiencia profesional, pero con ganas de aprender a desarrollar software de calidad.
                            </p>
                        </div>
                        <div className="col-lg-8 col-md-12 mb-4 mb-md-0 text-lg-end">
                            <h5 className="text-uppercase mb-4 pb-1 mt-3">Me puedes contactar por estos medios</h5>
                            <ul className="fa-ul stylo1">
                                {/* <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Warsaw, 00-967, Poland</span>
                                </li> */}
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">felipearavenat98@gmail.com</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 56974877680</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="text-center p-3 stylo2">
                    © 2022 Copyright - Felipe Aravena
                </div>

            </footer>

        </div>

    )
}

export default Footer
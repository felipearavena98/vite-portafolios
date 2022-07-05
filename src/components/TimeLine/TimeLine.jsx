import React from 'react'
import './TimeLine.scss'
import { BsTools } from "react-icons/bs";
import { Col, Row } from 'react-bootstrap';

const TimeLine = () => {
    return (
        <>
            <section className='pt-5 contenedorTime container' id='experiencia'>
                <h2 className='pt-5'>Experiencia Laboral/Profesional</h2>
                <div className="timeline">
                    <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                        <div className="timeline__event__icon ">
                            <BsTools />

                        </div>
                        <div className=" timeline__event__date">
                            <Row className='align-items-center'>
                                <Col sm={12}>
                                    <p>Marzo 2021</p>
                                </Col>
                                <Col sm={12}>
                                    <p>Julio 2021</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="timeline__event__content ">
                            <div className="timeline__event__title">
                                Desarrollador de Software
                            </div>
                            <div className="timeline__event__description">
                                <li>Desarrollo de API para crear audios con python.</li>
                                <li>Refactorizacón de código en sistema de mensajeria con Nodejs y cambios en la interfaz con Vuejs.</li>
                                <li>Documentación del sistema principal.</li>
                            </div>
                        </div>
                    </div>
                    <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                        <div className="timeline__event__icon">
                            <BsTools />
                        </div>
                        <div className="timeline__event__date">
                            <Row className='align-items-center'>
                                <Col sm={12}>
                                    <p>Octubre 2020</p>
                                </Col>
                                <Col sm={12}>
                                    <p>Febrero 2021</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title">
                                Desarrollador de Software (Practica)
                            </div>
                            <div className="timeline__event__description">
                                <li>
                                    Implementación y documentación de red neuronal para detección de llamadas telefónicas con Python.
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>

    )
}

export default TimeLine
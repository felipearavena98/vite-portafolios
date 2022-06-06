import React from 'react'
import './TimeLine.scss'
import { BsTools } from "react-icons/bs";
import { Col, Row } from 'react-bootstrap';

const TimeLine = () => {
    return (
        <>
            <section className='container pt-5' id='experiencia'>
                <h2 className='pt-5'>Experiencia Laboral/Profesional</h2>
                <div className="timeline">
                    <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                        <div className="timeline__event__icon ">
                            <BsTools />

                        </div>
                        <div className=" timeline__event__date">
                            <Row className='align-items-center'>
                                <Col sm={12}>
                                    <p>Octubre 2020</p>
                                </Col>
                                <Col sm={12}>
                                    <p>Febrero 2021</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="timeline__event__content ">
                            <div className="timeline__event__title">
                                Desarrollador de Software (Practica)
                            </div>
                            <div className="timeline__event__description">
                                <li>Participación de un proyecto de mi institución de estudios con una empresa de telefonias, en la cual se debia crear una red neuronal capaz de captar buzones de voz. Donde fui parte del equipo de desarrollo e implementación.</li>
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
                                    <p>Marzo 2021</p>
                                </Col>
                                <Col sm={12}>
                                    <p>Junio 2021</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title">
                                Desarrollador de Software
                            </div>
                            <div className="timeline__event__description">
                                <li>
                                    Participación activa del sistema de mensajeria, donde mis tareas fueron documentar, refactorizar codigo del backend y cambiar diseños de la interfaz.
                                </li>

                                <li>Documentar el sistema principal y mantener
                                    operativo el sistema de Text to Speech.
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
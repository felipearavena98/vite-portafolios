import React from 'react'
import './Secciones.scss'
import htmlimg from '../../images/svg-front/html.svg'
import csslogo from '../../images/svg-front/css3.svg'
import jslogo from '../../images/svg-front/js.svg'
import bootstraplogo from '../../images/svg-front/bootstrap.svg'
import reactlogo from '../../images/svg-front/react.svg'
import sasslogo from '../../images/svg-front/sass.svg'
import mongo from '../../images/svg-back/mongod.svg'
import expess from '../../images/svg-back/expressjs.svg'
import nodejs from '../../images/svg-back/nodejs.svg'
import postgresql from '../../images/svg-back/postgresql.svg'
import sequelizelogo from '../../images/svg-back/sequelizejs-icon.svg'
import mongooselogo from '../../images/svg-back/mongoose-1.svg'
import { Container } from 'react-bootstrap'


const Secciones = () => {
    return (
        <>
            <article id='tecnologia'>
                <h1>Stack de Tecnologias</h1>
                <p>Estos son los Frameworks, lenguajes de programación y bases de datos en los que tengo conocimientos.</p>
            </article>
            <main className='mt-5 margin-top-n'>
                <Container className='mt-5'>
                    <section id="destacados" className="destacados mt-5 mb-5">
                        <div className='col-12 col-md-4 textoLoad'>
                            <h2 className="glitch" data-text="Front-End">
                                Front-End
                            </h2>
                        </div>
                        <div className='d-flex flex-wrap col-12 col-md-8'>
                            <div className="game">
                                <div className="content">
                                    <h2>HTML</h2>
                                </div>
                                <img src={htmlimg} alt="" />
                            </div>
                            <div className="game">
                                <div className="content">
                                    <h2>JavaScript</h2>
                                </div>
                                <img src={jslogo} alt="" />
                            </div>

                            <div className="game">
                                <div className="content">
                                    <h2>Sass</h2>
                                </div>
                                <img src={sasslogo} alt="" />
                            </div>

                            <div className="game">
                                <div className="content">
                                    <h2>React</h2>
                                </div>
                                <img src={reactlogo} alt="" />
                            </div>

                            <div className="game">
                                <div className="content">
                                    <h2>Bootstrap</h2>
                                </div>
                                <img src={bootstraplogo} alt="" />
                            </div>

                            <div className="game">
                                <div className="content">
                                    <h2>CSS</h2>
                                </div>
                                <img src={csslogo} alt="" />
                            </div>
                        </div>

                    </section>
                    <section id="destacados" className="destacados pt-5">
                        <div className='col-12 col-md-4 order-md-2 backendText'>
                            <span>Back-End</span>
                        </div>
                        <div className='d-flex flex-wrap col-12 col-md-8  order-md-1'>
                            <div className="game">
                                <div className="content">
                                    <h2>Node</h2>
                                </div>
                                <img src={nodejs} alt="" />
                            </div>
                            <div className="game">
                                <div className="content">
                                    <h2>Express</h2>
                                </div>
                                <img src={expess} alt="" />
                            </div>
                            <div className="game">
                                <div className="content">
                                    <h2>MongoDB</h2>
                                </div>
                                <img src={mongo} alt="" />
                            </div>
                            <div className="game">
                                <div className="content">
                                    <h2>Postgresql</h2>
                                </div>
                                <img src={postgresql} alt="" />
                            </div>
                        </div>

                    </section>
                </Container>
            </main>
        </>
    )
}

export default Secciones
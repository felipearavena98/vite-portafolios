import React from 'react'
import './Me.scss'
// import CV from "../../images/assets/curriculum/cv.pdf"
// import { } from '@fortawesome/free-solid-svg-icons'


const Me = () => {
    return (
        <>

            <section className='margin-top-n text-white container' >
                <header className='d-flex flex-wrap'>
                    <div className='col-12 col-md-6 justify-content-start'>
                        <div className='contenidoTyped'>
                            <h2 className='contenido1'></h2>
                        </div>
                        <div className='Typed-Content'>
                            <h3 className='contenido2'></h3>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 mt-2'>
                        <div className='contenidoMe'>
                            <div className='content justify-content-end'>
                                <div className='visible'>
                                    <p className=''>
                                        Developer
                                    </p>
                                    <ul>
                                        <li className=''>Front-End</li>
                                        <li className=''>Back-End</li>
                                        <li className=''>Full-Stack</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
        </>
    )
}

export default Me
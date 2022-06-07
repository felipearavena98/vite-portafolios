import React, { useRef } from 'react'
import './Formulario.scss'
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';

const Formulario = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vl35zgv', 'template_4lt6ldr', form.current, '1vGpc_tCStQyO7_0W')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <>

            <section className='contactoFormulario' id='contacto'>
                <div className="contenedor">
                    <h2 className="logo"><span className="nombre-empresa">Formulario</span> Contacto</h2>
                    <div className="wrapper animated bounceInLeft">
                        <div className="info-empresa">
                            <h3>Información de Contacto</h3>
                            <ul className="servicios">
                                <li><i className="fa fa-map-marker"></i>Puente Alto, Santiago de Chile</li>
                                <li><i className="fa fa-mobile"></i> +569 74877680</li>
                                <li><i className="fa fa-envelope"></i> felipearavenat98@gmail.com</li>
                            </ul>
                        </div>
                        <div className="contacto">
                            <h3>Enviar Correo</h3>
                            <form className="formulario" ref={form} onSubmit={sendEmail}>
                                <p className='full2'>
                                    <label>Nombre</label>
                                    <input type="text" name="to_name" id="to_name" required />
                                </p>
                                <p className='full2'>
                                    <label>Apellido</label>
                                    <input type="text" name="to_lastname" id="to_lastname" />
                                </p>
                                <p className='full2'>
                                    <label>Correo</label>
                                    <input type="email" name="from_name" id="from_name" required />
                                </p>
                                <p className="full">
                                    <label>Mensaje</label>
                                    <textarea name="message" id="message" required></textarea>
                                </p>
                                <p className="full">
                                    <button className="boton-enviar">Enviar</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default Formulario
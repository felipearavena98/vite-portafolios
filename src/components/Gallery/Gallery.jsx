import React from 'react'
import buscarImgR from '../../images/projects/React/buscadorimgr.png'
import formik from '../../images/projects/React/formik.png'
import giftApp from '../../images/projects/React/gifapp.png'
import hooks from '../../images/projects/React/hooks.png'
import gestor from '../../images/projects/JavaScript/gestorus.png'
import lista from '../../images/projects/JavaScript/ListatareasJS.png'
import carro from '../../images/projects/JavaScript/carrosimple.png'
import restserver from '../../images/front-tech/restserver.jpg'
import postman from '../../../rest-server.json'
import './Gallery.scss'
import './Backend.scss'


const Gallery = () => {
    return (
        <>
            <section className='backbody'>
                <div className='container py-4'>

                    <div className="postcard dark red">
                        <a className="postcard__img_link" href="#">
                            <img className="postcard__img" src={restserver} alt="Image Title" />
                        </a>
                        <div className="postcard__text">
                            <h2 className="postcard__title red">Nodejs - MongoDB API</h2>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">Api para gestionar Usuarios, Productos y Categorías, esta api contiene lo siguiente:
                                <ul>
                                    <li>-Autenticación por Bearer Token.</li>
                                    <li>-Crud de Usuarios, Categorías y Productos.</li>
                                    <li>-Filtro de Búsqueda.</li>
                                    <li>-Paginación para Resultados.</li>
                                </ul>
                            </div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item"><i className="fas fa-tag mr-2"></i>Nodejs</li>
                                <li className="tag__item"><i className="fas fa-clock mr-2"></i>Express</li>
                                <li className="tag__item"><i className="fas fa-clock mr-2"></i>MongoDB</li>
                                <li className="tag__item"><i className="fas fa-clock mr-2"></i>Sequelize</li>
                            </ul>
                            <ul className="postcard__tagbox">
                                <li className="tag__item2">
                                    <a className='ancla pt-2' href="https://rest-server-v1-api.herokuapp.com/api/docs" target="_blank">
                                        <button type="button" className="btn btn-warning">Swagger</button>
                                    </a>
                                </li>
                                <li className="tag__item2">
                                    <a className='ancla pt-2' href={`data:text/json;charset=utf-8,${encodeURIComponent(
                                        JSON.stringify(postman)
                                    )}`} download='rest-server.json'><button type="button" className="btn btn-danger">Postman</button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Gallery
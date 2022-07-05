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
import './Frontend.scss'

const Gallery = () => {
    return (
        <>

            <section className='section1'>
                <h2 className='text-center text-white mt-5'>React apps</h2>
                <div className='container-section'>
                    <div class="containerfather mb-5 mt-5">
                        <div class="card">
                            <div class="card-header">
                                <img src={buscarImgR} alt="rover" />
                            </div>
                            <div class="card-body">
                                <span class="tag tag-teal">Formik</span>
                                <h4>
                                    Buscador de Imagenes con React, Formik y Fetch Api.
                                </h4>
                                <p>
                                    Puedes buscar tus imagenes y la cantidad mediante los filtros.
                                </p>
                                <div className=''>
                                    <button type="button" className="btn btn-success">Ver Proyecto</button>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <img src={giftApp} alt="ballons" />
                            </div>
                            <div class="card-body">
                                <span class="tag tag-purple">Fetch</span>
                                <h4>
                                    Buscador de Gifs con React y Fetch Api.
                                </h4>
                                <p>
                                    Aquí puedes encontrar muchos gifs de cualquier tipo, estos gifs provienen de la api de giphy.
                                </p>
                                <div className=''>
                                    <button type="button" className="btn btn-success">Ver Proyecto</button>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <img src={formik} />
                            </div>
                            <div class="card-body">
                                <span class="tag tag-pink">Formik</span>
                                <h4>
                                    Formulario de prueba de todo tipo de validaciones con Formik.
                                </h4>
                                <p>
                                    El formulario es el resultado de una serie de pruebas, para ver el funcionamiento de Formik.
                                </p>
                                <div className=''>
                                    <button type="button" className="btn btn-success">Ver Proyecto</button>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <img src={hooks} />
                            </div>
                            <div class="card-body">
                                <span class="tag tag-pink">Bootstrap</span>
                                <h4>
                                    La siguiente lista de tareas o To do list funciona con hooks.
                                </h4>
                                <p>
                                    El resultado de esta lista es para probar el funcionamiento de los hooks.
                                </p>
                                <div className=''>
                                    <button type="button" className="btn btn-success">Ver Proyecto</button>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <img src={gestor} />
                            </div>
                            <div class="card-body">
                                <span class="tag tag-pink">Formik</span>
                                <h4>
                                    Formulario de prueba con validaciones de Formik.
                                </h4>
                                <p>
                                    Este formulario es el resultado de algunas pruebas de formik.
                                </p>
                                <div className=''>
                                    <button type="button" className="btn btn-success">Ver Proyecto</button>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <img src={lista} />
                            </div>
                            <div class="card-body">
                                <span class="tag tag-pink">JavaScript</span>
                                <h4>
                                    Lista de tareas o To do list, creada en base a React.
                                </h4>
                                <p>
                                    Este To do list, funciona con JavaScript y LocalStorage.
                                </p>
                                <div className=''>
                                    <button type="button" className="btn btn-success">Ver Proyecto</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            <section className='backbody'>
                <h2 className='text-center text-white mt-5'>Backend Api</h2>
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
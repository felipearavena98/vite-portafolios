import React from 'react'
import buscarImgR from '../../images/projects/React/buscadorimgr.png'
import formik from '../../images/projects/React/formik.png'
import giftApp from '../../images/projects/React/gifapp.png'
import hooks from '../../images/projects/React/hooks.png'
import gestor from '../../images/projects/JavaScript/gestorus.png'
import lista from '../../images/projects/JavaScript/ListatareasJS.png'
import carro from '../../images/projects/JavaScript/carrosimple.png'
import './Gallery.scss'

const Gallery = () => {
    return (
        <div className='contenedor-Grid'>
            <div className="grid-container">
                <div className="item r-span2">
                    <img src={buscarImgR} alt="" />
                </div>

                <div className="item c-span2">
                    <img src={formik} alt="" />
                </div>

                <div className="item r-span2">
                    <img src={giftApp} alt="" />
                </div>

                <div className="item">
                    <img src={hooks} alt="" />
                </div>

                <div className="item">
                    <img src={gestor} alt="" />
                </div>

                <div className="item c-span2">
                    <img src={lista} alt="" />
                </div>

                <div className="item c-span2">
                    <img src={carro} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Gallery
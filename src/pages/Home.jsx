import React from 'react'
import Formulario from '../components/Formulario/Formulario'
import Me from '../components/Me/Me'
import Menu from '../components/Menu/Menu'
import Secciones from '../components/Secciones/Secciones'
import TimeLine from '../components/TimeLine/TimeLine'



const Home = () => {
    return (
        <>
            <Menu />
            <Me />
            <TimeLine />
            <Secciones />
            <Formulario />
        </>
    )
}

export default Home
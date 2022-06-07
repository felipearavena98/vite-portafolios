import { faHouse, faChalkboard, faMicrochip, faContactBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Menu.scss'
import { Github } from 'react-bootstrap-icons'


const Menu = () => {
    return (
        <>

            {/* Barra flotante */}
            <aside>
                <nav>
                    <a href="#principal">
                        <span
                            className='icon'
                        >
                            <FontAwesomeIcon icon={faHouse} />
                        </span>
                        <span
                            className='title'
                        >
                            Inicio</span>
                    </a>
                    <a href="#experiencia">
                        <span className='icon'>
                            <FontAwesomeIcon icon={faChalkboard} />
                        </span>
                        <span
                            className='title'
                        >
                            Experiencia
                        </span>
                    </a>
                    <a href="#tecnologia">
                        <span className='icon'>
                            <FontAwesomeIcon icon={faMicrochip} />
                        </span>
                        <span
                            className='title'
                        >
                            Tecnologias
                        </span>
                    </a>
                    <a href="https://github.com/felipearavena98" target='_blank'>
                        <span className='icon'>

                            <Github />
                        </span>
                        <span
                            className='title'
                        >
                            Github
                        </span>
                    </a>
                    <a href="#contacto">
                        <span className='icon'>

                            <FontAwesomeIcon icon={faContactBook} />
                        </span>
                        <span
                            className='title'
                        >
                            Contacto
                        </span>
                    </a>
                </nav>
            </aside>

        </>
    )
}

export default Menu
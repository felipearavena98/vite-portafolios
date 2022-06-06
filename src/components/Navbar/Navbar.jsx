import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar' id='principal'>
            <div className='nav justify-content-start'>
                <Link
                    to='/'
                    className='nav-link text-white fs-2'
                >
                    Felipe Aravena
                </Link>
            </div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link
                        to='gist'
                        className='nav-link text-white fs-2'
                    >
                        Gist
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="proyectos"
                        className='nav-link text-white fs-2'
                    >
                        Proyectos
                    </Link>
                </li>
                <li className="nav-item">
                    <a
                        href='#contacto'
                        className='nav-link text-white fs-2'
                    >
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
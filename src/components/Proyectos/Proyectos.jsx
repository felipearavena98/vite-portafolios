import React from 'react'
import { Github, Globe } from 'react-bootstrap-icons'
import { proyectos } from '../../utils/projects'
import './Proyectos.scss'

const Proyectos = () => {
    return (
        <section className='container-fluid p-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='py-4'>
                        <h1 className='text-center display-2'>Proyectos</h1>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                {proyectos.map((project, index) => (
                    <div key={index} className="card m-5" >
                        <img src={project.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            <a href={project.url} className='btn btn-success m-2'><i src={Globe} />Proyecto</a>
                            <a href={project.github} className='btn btn-dark m-2'><i src={Github} />Github</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

// export default Proyectos
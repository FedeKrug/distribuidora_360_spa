import React from 'react'

export const CategoriesComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand d-md-none d-md-flex fw-bold" href="#">Categorias</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Herramientas</a></li>
                                <li><a className="dropdown-item" href="#">Maquinarias</a></li>
                                <li><a className="dropdown-item" href="#">Limpieza</a></li>
                                <li><a className="dropdown-item" href="#">Electrónica</a></li>
                                <li><a className="dropdown-item" href="#">Electricidad</a></li>
                                <li><a className="dropdown-item" href="#">Plomería</a></li>
                                <li><a className="dropdown-item" href="#">Albañilería</a></li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Electronics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Fashion</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Furnitures</a>
                </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

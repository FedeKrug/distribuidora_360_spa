import React from 'react'

export const AvatarDropdown = () => {
    return (
        <div className="btn-group">
            <button className="me-3 border-0 d-flex flex-row align-items-center bg-dark btn-lg "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <img src="https://i.imgur.com/EYFtR83.jpg" className="rounded-circle" width="35" />
                <span className="nav-link d-flex align-items-center">UserName</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-start dropdown-menu-md-end dropdown-menu-dark">
                <li><a className="dropdown-item" href="#">Cuenta</a></li>
                <li><a className="dropdown-item" href="#">Lista de Deseados</a></li>
                <li><a className="dropdown-item" href="#">Ayuda</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Cerrar Sesión</a></li>
            </ul>
        </div>
    )
}

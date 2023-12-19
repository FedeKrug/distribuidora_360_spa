import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { logout } from '../store/auth';


export const AvatarDropdown = () => {
    const dispatch = useDispatch();
    const { onResetForm, initialState } = useForm({});


    const handleLogout = async () => {
        try {
            dispatch(logout('User Logout'));
            onResetForm(initialState);
        } catch (err) {
            console.error(err);
        }
    }


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
                <li><Link className="dropdown-item" to="/cuenta">Cuenta</Link></li>
                <li><Link className="dropdown-item" to="/deseados">Lista de Deseados</Link></li>
                <li><Link className="dropdown-item" to="/preguntas-frecuentes">Ayuda</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                    <button
                        className="dropdown-item"
                        onClick={handleLogout}
                    >
                        Cerrar Sesión
                    </button>
                </li>
            </ul>
        </div>
    )
}

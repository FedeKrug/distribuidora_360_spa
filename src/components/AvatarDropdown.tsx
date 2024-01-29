import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { logout } from '../store/auth';
import { RootState } from '../store';
import { getItem, setItem } from '../utils/localStorage';

export const AvatarDropdown = () => {
    const dispatch = useDispatch();
    const { onResetForm, initialState } = useForm({});
    const user = useSelector((state: RootState) => state.auth);
    const { displayName, photoURL } = user;
    const navigate = useNavigate();


    const handleLogout = async () => {
        try {
            dispatch(logout('User Logout'));
            navigate("/")
            onResetForm(initialState);

        } catch (err) {
            console.error(err);
        }
    }
    console.log({ user })
    return (
        <div className="btn-group">
            <button className="me-3 border-0 d-flex flex-row align-items-center bg-dark btn-lg "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <img src={photoURL ?? "../../public/images/User.png"} className="rounded-circle" width="35" />


                <span className="nav-link d-flex align-items-center">{displayName ?? "Usuario"} </span>
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

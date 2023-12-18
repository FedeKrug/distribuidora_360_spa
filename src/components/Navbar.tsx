import { Link } from "react-router-dom";
import { AvatarDropdown } from "./AvatarDropdown";
import SwitchDarkMode from "./SwitchToDarkMode";
import '../styles/styles.css';
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Navbar = () => {
    const { status } = useSelector((state: RootState) => state.auth);

    return (
        <header className="section-header">

            <nav className="navbar navbar-dark navbar-expand p-0 bg-dark  ">
                <div className="container-fluid">
                    <ul className="navbar-nav d-none d-md-flex mr-auto">
                        <li className="nav-item"><Link className="nav-link fw-bold title" to="/" data-abc="true">Distribuidora 360</Link></li>
                        <li className="nav-item"><Link className="nav-link fw-bold title" to="/contacto" data-abc="true">Contacto</Link></li>
                        <li className="nav-item"><Link className="nav-link fw-bold title" to="/preguntas-frecuentes" data-abc="true">Preguntas Frecuentes</Link></li>
                    </ul>
                    <ul className="navbar-nav d-flex align-items-center">
                        <li className="nav-item">
                            <SwitchDarkMode />
                            {
                                (status === 'authenticated') &&
                                <AvatarDropdown />
                            }
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}

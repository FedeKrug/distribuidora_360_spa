import { Link } from "react-router-dom"
import { AvatarDropdown } from "./AvatarDropdown"
import { FaShoppingCart } from "react-icons/fa";
import SwitchDarkMode from "./SwitchToDarkMode"
import '../styles/styles.css'
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { SearchForm } from "./SearchForm";

export const Navbar = () => {

    const { isDark } = useContext(ThemeContext);
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
                            <AvatarDropdown />
                        </li>
                    </ul>
                </div>
            </nav>

            <section className="header-main border-bottom primary">
                <div className="container-fluid">
                    <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
                        <Link className="col-md-2" to='/'>
                            <img className="d-none d-md-flex" src={`${(isDark) ? '../../public/images/Logo3.png' : '../../public/images/Logo4.png'}`} width="100" />
                        </Link>
                        <SearchForm />

                        <div className="col-md-2">
                            <div className="d-flex d-md-flex flex-row align-items-center">
                                <span className="shop-bag">
                                    <FaShoppingCart />
                                    1

                                </span>
                                {/* <div className="d-flex flex-column ms-2">
                                    <span className="fw-bold">$27.90</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand d-md-none d-md-flex fw-bold" href="#">Categories</a>
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
        </header>
    )
}

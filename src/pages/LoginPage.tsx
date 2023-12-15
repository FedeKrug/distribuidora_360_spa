import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import '../styles/styles.css'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    return (<>
        <div className='container-fluid d-flex justify-content-center'>

            <div className='account-form '>
                <h2 className='text-center fw-bold'>Ingresar</h2>


                <div className="tab-content">
                    <div
                        className="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                    >
                        <form>
                            <div className="text-center mb-3">
                                <p>Ingresar con:</p>
                                <button
                                    data-mdb-ripple-init
                                    type="button"
                                    className="btn btn-secondary btn-floating mx-1 rounded-circle"
                                >
                                    <FaGoogle />
                                </button>
                            </div>

                            <p className="text-center">or:</p>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="email" id="loginName" className="form-control" />
                                <label className="form-label" form="loginName">Email</label>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="password" id="loginPassword" className="form-control" />
                                <label className="form-label" form="loginPassword">Contraseña</label>
                            </div>
                            <ul className="nav nav-pills nav-justified mb-3 " >
                                <li className="nav-item mx-2" >
                                    <a
                                        className="nav-link primary text"
                                        id="tab-login"
                                        data-mdb-pill-init
                                        href="#pills-login"
                                        aria-controls="pills-login"
                                        aria-selected="true"
                                    >
                                        Ingresar
                                    </a>
                                </li>
                            </ul>

                            <div className="row mb-4">
                                <div className="col-md-6 d-flex justify-content-center">
                                    <div className="form-check mb-3 mb-md-0">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="loginCheck"
                                            checked
                                        />
                                        <label className="form-check-label" form="loginCheck"> Recuerdame </label>
                                    </div>
                                </div>

                                <div className="col-md-6 d-flex justify-content-center">
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-4">Ingresar</button>

                            <div className="text-center">
                                <p>¿No tienes cuenta? <Link to="/registro">Crear Cuenta</Link></p>
                            </div>
                        </form>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-register"
                        role="tabpanel"
                        aria-labelledby="tab-register"
                    >
                        <form>
                            <div className="text-center mb-3">
                                <p>Sign up with:</p>
                                <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>

                                <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>

                            <p className="text-center">or:</p>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="text" id="registerName" className="form-control" />
                                <label className="form-label" form="registerName">Name</label>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="text" id="registerUsername" className="form-control" />
                                <label className="form-label" form="registerUsername">Username</label>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="email" id="registerEmail" className="form-control" />
                                <label className="form-label" form="registerEmail">Email</label>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="password" id="registerPassword" className="form-control" />
                                <label className="form-label" form="registerPassword">Password</label>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="password" id="registerRepeatPassword" className="form-control" />
                                <label className="form-label" form="registerRepeatPassword">Repeat password</label>
                            </div>

                            <div className="form-check d-flex justify-content-center mb-4">
                                <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    value=""
                                    id="registerCheck"
                                    checked
                                    aria-describedby="registerCheckHelpText"
                                />
                                <label className="form-check-label" form="registerCheck">
                                    I have read and agree to the terms
                                </label>
                            </div>

                            <button data-mdb-ripple-init type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

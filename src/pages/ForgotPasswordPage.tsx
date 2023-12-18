import React from 'react'
import { Link } from 'react-router-dom'

export const ForgotPasswordPage = () => {
    return (<>
        <div className='container-fluid d-flex justify-content-center'>

            <div className='account-form '>
                <h2 className='text-center fw-bold mb-4'>¿Olvidaste tu contraseña?</h2>


                <div className="tab-content">
                    <div
                        className="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                    >
                        <form>
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
                                    <button
                                        className="nav-link primary text"
                                        id="tab-login"
                                        data-mdb-pill-init
                                        //href="#pills-login"
                                        aria-controls="pills-login"
                                        aria-selected="true"
                                    >
                                        Ingresar
                                    </button>
                                </li>
                            </ul>

                            <div className='d-flex justify-content-center'>
                                <button type="submit" className="btn btn-primary btn-block mb-4">Enviar código de verificación</button>
                            </div>

                            <div className="text-center">
                                <p>¿No tienes cuenta? <Link to="/registro">Crear Cuenta</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    </>
    )
}

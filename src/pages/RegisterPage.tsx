import React from 'react'
import { FaGoogle } from 'react-icons/fa'

export const RegisterPage = () => {
    return (
        <div className='container-fluid d-flex justify-content-center'>

            <div className='account-form'>
                <h2 className='text-center fw-bold'>Registro</h2>

                <div className="text-center my-3">
                    <p>o registrate con:</p>
                    <button
                        data-mdb-ripple-init
                        type="button"
                        className="btn btn-secondary rounded-circle"
                    >
                        <FaGoogle />
                    </button>
                </div>

                <form>
                    <div className="row mb-4">
                        <div className="col">
                            <div data-mdb-input-init className="form-outline">
                                <input type="text" id="form3Example1" className="form-control" />
                                <label className="form-label" form="form3Example1">Nombre</label>
                            </div>
                        </div>
                        <div className="col">
                            <div data-mdb-input-init className="form-outline">
                                <input type="text" id="form3Example2" className="form-control" />
                                <label className="form-label" form="form3Example2">Apellido</label>
                            </div>
                        </div>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email" id="form3Example3" className="form-control" />
                        <label className="form-label" form="form3Example3">Email</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password" id="form3Example4" className="form-control" />
                        <label className="form-label" form="form3Example4">Contraseña</label>
                    </div>



                    <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Sign up</button>


                </form>
            </div>
        </div>
    )
}

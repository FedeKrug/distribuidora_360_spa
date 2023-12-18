import { useMemo } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { startGoogleSignIn, startRegisterWithEmailAndPassword } from '../store/auth/thunks';
import '../styles/styles.css';

export const RegisterPage = () => {

    const formValidations = {
        email: [(value: string) => value.includes('@'), 'El correo debe tener @'],
        password: [(value: string) => value.length >= 6, 'El password debe tener mas de 6 letras'],
        displayName: [(value: string) => value.length >= 1, 'El display name es obligatorio']
    }
    const dispatch = useDispatch<any>();
    const { status } = useSelector((state: any) => state.auth);

    const navigate = useNavigate();

    const isAuthenticating = useMemo(() => status === 'checking', [status])
    const { displayName, email, password, onInputChange } = useForm({
        email: '',
        password: '',
        displayName: ''
    });

    const signUp = () => {
        dispatch(startRegisterWithEmailAndPassword(email, password));
        navigate('/login');
    }

    const googleSignIn = () => {
        dispatch(startGoogleSignIn());
    }

    return (
        <div className='container-fluid d-flex justify-content-center'>

            <div className='account-form'>
                <h2 className='text-center fw-bold'>Registro</h2>


                <div className="text-center my-3">
                    <button
                        data-mdb-ripple-init
                        type="button"
                        className="btn btn-secondary rounded-circle"
                    >
                        <FaGoogle />
                    </button>
                </div>
                <p className="divider-text">
                    <span className="background">O</span>
                </p>

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
                    <div className="text-center">
                        <p>¿Ya tienes cuenta? <Link to="/">Ingresar</Link></p>
                    </div>

                    <div className='d-flex justify-content-center'>

                        <button
                            data-mdb-ripple-init
                            type="button"
                            className="btn btn-primary btn-block mb-4 "
                        >
                            Crear Cuenta
                        </button>
                    </div>


                </form>
            </div>
        </div>
    )
}


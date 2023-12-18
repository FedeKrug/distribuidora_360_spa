import { FaGoogle } from 'react-icons/fa';
import '../styles/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';;
import { useMemo } from 'react';;
import { useForm } from '../hooks/useForm';;
import { startGoogleSignIn, startLoginWithEmailAndPassword } from '../store/auth/thunks';;
import { setItem } from '../utils/localStorage';;

export const LoginPage = () => {

    const { status } = useSelector((state: any) => state.auth);
    const isAuthenticating = useMemo(() => status === 'checking', [status]);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();


    const { email, password, onInputChange, formState } = useForm({
        email: '',
        password: '',
        status: 'authenticated'
    });



    const signIn = async () => {
        dispatch(startLoginWithEmailAndPassword(email, password));
        navigate('/');
        setItem('auth', { email, password, status });
    };
    const googleSignIn = () => {
        dispatch(startGoogleSignIn());
        navigate('/');
        setItem('auth', formState);
    }

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
                                <button
                                    data-mdb-ripple-init
                                    type="button"
                                    className="btn btn-secondary btn-floating mx-1 rounded-circle"
                                >
                                    <FaGoogle />
                                </button>

                            </div>

                            <p className="divider-text">
                                <span className="background">O</span>
                            </p>

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
                                    <Link to="/recuperar-clave">¿Olvidaste la contraseña?</Link>
                                </div>
                            </div>



                            <div className="text-center">
                                <p>¿No tienes cuenta? <Link to="/registro">Crear Cuenta</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

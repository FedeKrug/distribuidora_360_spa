import { useMemo } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { startGoogleSignIn, startRegisterWithEmailAndPassword } from '../store/auth/thunks';
import '../styles/styles.css';

const formValidations = {
    email: [(value: string) => value.includes('@'), 'El correo debe tener @'],
    password: [(value: string) => value.length >= 6, 'El password debe tener mas de 6 letras'],
    displayName: [(value: string) => value.length >= 1, 'El display name es obligatorio']
}
export const RegisterPage = () => {

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
        //if(!formValidations)return;
        dispatch(startRegisterWithEmailAndPassword(email, password));
        navigate('/');
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
                        onClick={googleSignIn}
                        disabled={isAuthenticating}
                    >
                        <FaGoogle />
                    </button>
                </div>
                <p className="divider-text">
                    <span className="background">O</span>
                </p>

                <form
                    onSubmit={signUp}
                >
                    <div className="row mb-4">
                        <div className="col">
                            <div data-mdb-input-init className="form-outline">
                                <input
                                    type="text"
                                    placeholder='Nombre'
                                    className="form-control"
                                    onChange={onInputChange}
                                    value={displayName}
                                    name='displayName'
                                />
                                <label className="form-label" >Nombre de Usuario</label>
                            </div>
                        </div>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <input
                            type="text"
                            placeholder='Email'
                            className="form-control"
                            value={email}
                            name='email'
                            onChange={onInputChange}
                        />
                        <label className="form-label" >Correo Electrónico</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <input
                            type="password"
                            className="form-control"
                            onChange={onInputChange}
                            value={password}
                            name='password'
                            placeholder='Contraseña'
                        />
                        <label className="form-label" >Contraseña</label>
                    </div>
                    <div className="text-center">
                        <p>¿Ya tienes cuenta? <Link to="/">Ingresar</Link></p>
                    </div>
                    {
                        (displayName && email && password) &&

                        <div className='d-flex justify-content-center'>

                            <button
                                data-mdb-ripple-init
                                type="button"
                                className="btn btn-primary btn-block mb-4 "
                                onClick={signUp}
                                disabled={isAuthenticating}
                            >
                                Crear Cuenta
                            </button>
                        </div>
                    }


                </form>
            </div>
        </div>




        //         <form className="grid grid-cols-1 gap-6">
        //           <label className="block">
        //             <span className="text-neutral-800 dark:text-neutral-200">
        //               {translate(tr.DisplayName)}
        //             </span>
        //             <Input
        //               type="text"
        //               placeholder="Example Name"
        //               className="mt-1"
        //               name="displayName"
        //               value={displayName}
        //               onChange={onInputChange}
        //             />
        //           </label>
        //           <label className="block">
        //             <span className="text-neutral-800 dark:text-neutral-200">
        //               {translate(tr.EmailAddress)}
        //             </span>
        //             <Input
        //               type="email"
        //               placeholder="example@example.com"
        //               className="mt-1"
        //               name="email"
        //               value={email}
        //               onChange={onInputChange}
        //             />
        //           </label>
        //           <label className="block">
        //             <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
        //               {translate(tr.Password)}
        //             </span>
        //             <Input
        //               type="password"
        //               className="mt-1"
        //               name="password"
        //               value={password}
        //               onChange={onInputChange}
        //             />
        //           </label>
        //           {
        //             (email && password && displayName)
        //             &&
        //             <ButtonPrimary
        //               type="submit"
        //               disabled={isAuthenticating}
        //               onClick={signUp}
        //             >
        //               {translate(tr.Continue)}
        //             </ButtonPrimary>
        //           }
        //         </form>

        //         {/* ==== */}
        //         <span className="block text-center text-neutral-700 dark:text-neutral-300">
        //           {translate(tr.AlreadyHaveAnAccount)} {` `}
        //           <Link to="/login">{translate(tr.SignIn)}</Link>
        //         </span>
        //       </div>
        //     </div>
        //   </div>
    )
}


import { FaGoogle } from 'react-icons/fa';
import '../styles/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';;
import { useMemo, useState } from 'react';;
import { useForm } from '../hooks/useForm';;
import { startGoogleSignIn, startLoginWithEmailAndPassword } from '../store/auth/thunks';;
import { setItem } from '../utils/localStorage';;

export const LoginPage = () => {
    const [checkBox, setCheckBox] = useState(false);
    const { status } = useSelector((state: any) => state.auth);
    const isAuthenticating = useMemo(() => status === 'checking', [status]);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();


    const { email, password, onInputChange, formState } = useForm({
        email: '',
        password: '',
        status: 'authenticated'
    });

    const handleCheckboxChange = () => {
        setCheckBox((checked) => !checked);
    }

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
                    >
                        <form onSubmit={signIn}>
                            <div className="text-center mb-3">
                                <button
                                    data-mdb-ripple-init
                                    type="button"
                                    className="btn btn-secondary btn-floating mx-1 rounded-circle"
                                    onClick={googleSignIn}
                                >
                                    <FaGoogle />
                                </button>

                            </div>

                            <p className="divider-text">
                                <span className="background">O</span>
                            </p>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input
                                    type="email"
                                    className="form-control"
                                    onChange={onInputChange}
                                    value={email}
                                    name='email'
                                />
                                <label className="form-label" >Email</label>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input
                                    type="password"
                                    id="loginPassword"
                                    className="form-control"
                                    onChange={onInputChange}
                                    value={password}
                                    name='password'
                                />
                                <label className="form-label" >Contraseña</label>
                            </div>
                            <ul className="nav nav-pills nav-justified mb-3 " >
                                <li className="nav-item mx-2" >
                                    <button
                                        className="nav-link primary text"
                                        data-mdb-pill-init
                                        aria-controls="pills-login"
                                        aria-selected="true"
                                        onClick={signIn}
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
                                            checked={checkBox}
                                            onChange={handleCheckboxChange}
                                        />
                                        <label className="form-check-label" > Recuerdame </label>
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


        {/*
         

          <form
            className="grid grid-cols-1 gap-6"
            onSubmit={signIn}
          >
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                {translate(tr.EmailAddress) || translate(tr.TraduccionInvalida)}
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
                name='email'
                value={email}
                onChange={onInputChange}


              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                {translate(tr.Password) || translate(tr.TraduccionInvalida)}
                <Link to="/forgot-pass" className="text-sm">
                  {translate(tr.ForgotPassword) || translate(tr.TraduccionInvalida)}
                </Link>
              </span>
              <Input
                type="password"
                className="mt-1"
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </label>
            {
              (email && password)
              &&
              <ButtonPrimary
                disabled={isAuthenticating}
                type="submit"
                className="disabled:opacity-50"
                onClick={() => signIn()}
              >
                {translate(tr.Continue) || translate(tr.TraduccionInvalida)}
              </ButtonPrimary>
            }
          </form>

 
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            {translate(tr.NewUser) || translate(tr.TraduccionInvalida)} {` `}
            <Link to="/signup"> {translate(tr.CreateAnAccount) || translate(tr.TraduccionInvalida)}</Link>
          </span>
        </div>
      </div>
    </div> */}
    </>
    )
}

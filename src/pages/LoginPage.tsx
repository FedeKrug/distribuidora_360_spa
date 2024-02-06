import { FaGoogle } from 'react-icons/fa';
import '../styles/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';;
import { FormEventHandler, useMemo, useState } from 'react';;
import { useForm } from '../hooks/useForm';;
import { startGoogleSignIn, startLoginWithEmailAndPassword } from '../store/auth/thunks';;
import { getItem, setItem } from '../utils/localStorage';;

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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    signIn();
  }

  const signIn = async () => {
    dispatch(startLoginWithEmailAndPassword(email, password));
    setItem('auth', { email, password, status });
    navigate('/');
    getItem("user");
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
            <form onSubmit={handleSubmit}>
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
                    type='submit'
                  // onClick={signIn}
                  >
                    Ingresar
                  </button>
                </li>
              </ul>

              <div className="row mb-4">
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

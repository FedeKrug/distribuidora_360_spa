import { Link } from 'react-router-dom'
import '../styles/styles.css'
// import '../styles/footer.css'
// import { FaInstagram, FaGoogle, FaFacebook, FaTiktok } from 'react-icons/fa'
import { email, phoneNumber } from '../data/constants';
import { ShowThemeColor } from '../data/ThemeManager';

export const Footer = () => {
    ShowThemeColor();
    return (

        <footer className="text-center text-lg-start text-white primary">
            <div className="container p-4 pb-0">
                <section className="">
                    <div className="row ">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 px-auto " >
                            <Link className='text-decoration-none text-white' to='/'>
                                <h4 className="text-uppercase mb-4 font-weight-bold">
                                    Distribuidora 360
                                </h4>
                            </Link>
                            <p>
                                Here you can use rows and columns to organize your footer
                                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 ps-4">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Productos</h6>
                            <ul className='nav-link list-unstyled'>
                                <li ><Link className='text-decoration-none text-white' to="">Herramientas</Link></li>
                                <li><Link className='text-decoration-none text-white' to="">Maquinarias</Link></li>
                                <li><Link className='text-decoration-none text-white' to="">Electricidad</Link></li>
                            </ul>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold ">Contacto</h6>
                            <ul className=' list-unstyled text-lg-start '>
                                {/* <li >Direccion del local</li> */}
                                <li>Email: <a className='text-decoration-none text-white' target='_blank' href={`mailto:${email}`}>{email}</a></li>
                                <li>Número de Contacto: <Link className='text-decoration-none text-white' to="">{phoneNumber}</Link></li>
                            </ul>
                        </div>

                        {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Seguinos en nuestras redes</h6>
                            <div>

                                <a
                                    className="btn  btn-floating rounded-circle m-1"
                                    style={{ backgroundColor: '#3b5998', width: 40, height: 40 }}
                                    href="#!"
                                    role="button"
                                    target='_blank'
                                >
                                    <div className='text-white'>

                                        <FaFacebook />
                                    </div>
                                </a>
                                <a
                                    className="btn  btn-floating rounded-circle m-1"
                                    style={{ backgroundColor: '#55acee', width: 40, height: 40 }}
                                    href="#!"
                                    role="button"
                                    target='_blank'
                                >
                                    <div className='text-white'>

                                        <FaTiktok />
                                    </div>

                                </a>
                            </div>

                            <a
                                className="btn  btn-floating rounded-circle m-1"
                                style={{ backgroundColor: '#dd4b39', width: 40, height: 40 }}
                                href="#!"
                                role="button"
                                target='_blank'
                            >
                                <div className='text-white'>

                                    <FaGoogle />
                                </div>
                            </a>

                            <a
                                className="btn  btn-floating rounded-circle m-1"
                                style={{ backgroundColor: '#ac2bac', width: 40, height: 40 }}
                                href="#!"
                                role="button"
                                target='_blank'
                            >
                                <div className='text-white'>

                                    <FaInstagram />
                                </div>
                            </a>
                        </div> */}
                    </div>
                </section>
            </div>

            <div className="text-center p-3">
                © 2023 Copyright: <a className="text-white" href="https://kuboo.io/" target='_blank'>Kuboo</a>
            </div>
        </footer>

    )
}

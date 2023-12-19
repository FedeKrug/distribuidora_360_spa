import { Link } from "react-router-dom"

export const Error404Page = () => {
    return (<>

        <div className="container-fluid error404Page">
            <div className="m-5 text-center">
                <div className="d-flex justify-content-center">

                    <img
                        src="../../../public/images/error404_img.webp"
                        alt="Error 404"
                        width={150}
                        height={150}
                    />

                </div>
                <h1>Página no encontrada</h1>
                <p>La ruta especificada no fue encontrada en esta web. Por favor, revisa la URL por errores de escritura y prueba otra vez.
                </p>

            </div>
        </div>
        <div className="d-flex justify-content-center my-3">
            <Link
                to='/'
                className="nav nav-link  button"
            >
                Volver al inicio
            </Link>
        </div>
    </>
    )
}

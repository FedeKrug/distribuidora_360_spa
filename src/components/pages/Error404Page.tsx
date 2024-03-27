
import { Link } from 'react-router-dom'

export const Error404Page = () => {
    return (<>

        <div className="flex flex-col">


            <div className=''>
                <div className="m-5 text-center">

                    <div className='flex flex-col'>
                        <img
                            src="../images/error404_img.webp"
                            alt="Error 404"
                            width={150}
                            height={150}
                            className='self-center'
                        />

                        <h1>Página no encontrada</h1>

                        <p className='mt-5 self-center w-1/2'>La ruta especificada no fue encontrada en esta web.Por favor, revisa la URL por errores de escritura y prueba otra vez.</p>
                    </div>

                </div>
            </div>
            <Link
                to='/'
                className="text-[18px] font-bold self-center"
            >
                <div className="w-max mt-4 mb-8 bg-yellow-400 flex  p-[1rem] rounded-2xl ">
                    Volver al inicio
                </div>
            </Link>
        </div>
    </>
    )
}


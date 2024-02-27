import { Link } from 'react-router-dom'

export const StorePage = () => {
    return (
        <div className='mx-10'>
            <div className="flex justify-center items-center ">
                <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col jusitfy-center items-center space-y-10">
                        <div className="flex flex-col justify-center items-center ">
                            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Comprar por categoría</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
                            <Link className="relative group flex justify-center items-center h-full w-full " to="categoria/">
                                <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="todos" />
                                <div className="sm-opacity-100 absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 py-14 z-0 px-20 flex-1 w-full bg-white bg-opacity-50">
                                    <span className="text-[35px] dark:text-white-800 focus:outline-none z-10 absolute text-base font-bold leading-none text-gray-800 py-3 w-36 ">Todos</span>
                                </div>
                            </Link>

                            <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                                <Link className="relative group flex justify-center items-center h-full w-full" to="categoria/">
                                    <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="ferreteria" />
                                    <div className="absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 py-14 z-0 px-20 flex-1 w-full bg-white bg-opacity-50">
                                        <span className="text-[35px] dark:text-white-800 focus:outline-none z-10 absolute text-base font-bold leading-none text-gray-800 py-3 w-36 ">Ferretería</span>
                                    </div>
                                </Link>
                                <Link className="relative group flex justify-center items-center h-full w-full" to="categoria/">
                                    <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" alt="electricidad" />
                                    <div className="absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 py-14 z-0 px-20 flex-1 w-full bg-white bg-opacity-50">
                                        <span className="text-[35px] dark:text-white-800 focus:outline-none z-10 absolute text-base font-bold leading-none text-gray-800 py-3 w-36 ">Electricidad</span>
                                    </div>
                                </Link>
                            </div>

                            <Link className="relative group justify-center items-center h-full w-full hidden lg:flex" to="categoria/">
                                <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="sanitarios" />
                                <div className="absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 py-14 z-0 px-20 flex-1 w-full bg-white bg-opacity-50">
                                    <span className="text-[35px] dark:text-white-800 focus:outline-none z-10 absolute text-base font-bold leading-none text-gray-800 py-3 w-36 ">Sanitarios</span>
                                </div>
                            </Link>


                        </div>

                    </div>
                </div>
            </div>

            <div className="2xl:mx-auto 2xl:container  px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                <div className="flex flex-col jusitfy-center items-center ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-x-4 md:gap-x-8 w-full">
                        <Link className="relative group flex justify-center items-center h-full w-full" to="categoria/">
                            <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="girl-image" />
                            <div className="absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 py-14 z-0 px-20 flex-1 w-full bg-white bg-opacity-50">
                                <span className="text-[35px] dark:text-white-800 focus:outline-none z-10 absolute text-base font-bold leading-none text-gray-800 py-3 w-36 ">Jardinería</span>
                            </div>
                        </Link>

                        <Link className="relative group justify-center items-center h-full w-full hidden lg:flex" to="categoria/">
                            <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="girl-image" />
                            <div className="absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 py-14 z-0 px-20 flex-1 w-full bg-white bg-opacity-50">
                                <span className="text-[35px] dark:text-white-800 focus:outline-none z-10 absolute text-base font-bold leading-none text-gray-800 py-3 w-36 ">Ofertas</span>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

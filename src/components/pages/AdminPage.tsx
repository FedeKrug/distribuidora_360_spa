import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch"
import { AdminProductTableCard } from "../AdminProductTableCard";

export const AdminPage = () => {

    const { data, getData } = useFetch("productLists");
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='mx-10'>
            <div className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col jusitfy-center items-center space-y-10">
                        <div className="flex flex-col justify-center items-center ">
                            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Cargar las planillas de mayoristas</h1>
                        </div>

                        <button className='my-0'>
                            Subir más planillas
                        </button>

                        <div className="flex flex-wrap">
                            {
                                data.map((planilla, index) => (
                                    <AdminProductTableCard key={index} {...planilla} />
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

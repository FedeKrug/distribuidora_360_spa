import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { ConvertIdToCategory } from '../../utils/idToCategory';
import { ProductsType } from '../ProductsList';


const maxCant = 25;



export const ProductPage = () => {
    const [productCant, SetproductCant] = useState<number>(0);

    const { data, getData } = useFetch("productos");
    useEffect(() => {
        getData();
    }, [])
    const { productId } = useParams();

    const producto: ProductsType = data[parseInt(productId!)];

    const productCategory = producto?.idCategory;
    const categoria = ConvertIdToCategory(productCategory!);
    const handleAdd = () => {
        SetproductCant(c => c + 1 >= maxCant ? maxCant : c + 1);
    }
    const handleSubstract = () => {
        SetproductCant(c => c - 1 <= 0 ? 0 : c - 1);
    }

    return (<>
        <div className="m-12">
            <div className='lg:flex justify-between'>
                <img
                    className='h-[300px] lg:h-[450px] rounded-[10px] lg:rounded-[25px] w-full lg:w-2/5'
                    src={producto?.imageSrc}
                    alt={producto?.nombreProducto}

                />

                <div className=' flex-1 text-start lg:pl-10 block '>

                    <div className='my-5 lg:m-0'>
                        <h2 className='text-[25px] lg:text-[35px]'>{producto?.nombreProducto}</h2>
                        {
                            (producto?.precioVenta != "" && producto?.precioVenta != null)
                                ?
                                <span className='block font-semibold text-[25px] '>${producto?.precioVenta}</span>
                                :
                                null
                        }
                        <span className='text-[18px] lg:text-[20px]'>Acerca de:</span>
                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus officia est cum suscipit, reiciendis, repellendus veritatis maiores, ipsam ducimus excepturi voluptatum. Suscipit impedit enim atque, aspernatur nostrum ut rem.</p>
                    </div>
                    <div>
                        <hr className='my-5' />
                    </div>

                    <div>
                        <div className='text-center lg:w-fit mb-4'>
                            <span className='text-[18px]'>
                                Categoría
                            </span>
                            <div className='text-[20px] text-black font-bold  lg:text-[16px] bg-blue-200 border-green-800 border-[4px] p-2 rounded-[14px] mt-2'>{categoria}</div>
                        </div>


                    </div>

                    <div className='flex lg:flex-row flex-col items-center mb-3'>
                        <div className='lg:w-fit lg:block text-center flex flex-col my-5 bottom-[70px]'>
                            <span className='px-3 text-center mb-1 text-[18px] '>Cantidad</span>
                            <div className='flex justify-between lg:block bg-gray-400 w-full lg:w-fit rounded-[20px] '>
                                <button className='' onClick={handleSubstract}>-</button>
                                <span className='px-3 mx-3 text-black font-bold text-[25px] lg:text-[18px]'>{productCant}</span>
                                <button className='' onClick={handleAdd}>+</button>
                            </div>

                        </div>

                        {
                            productCant === maxCant ?
                                <div className='flex-1 lg:pl-6 lg:mt-7 text-red-600 font-bold text-center lg:text-start'>
                                    Has llegado a la maxima cantidad de productos!!
                                </div>
                                : null
                        }
                    </div>
                    <div className=' flex flex-col lg:block'>
                        {
                            (producto?.precioVenta == "" || producto?.precioVenta == null) ?
                                //TODO: Darle al boton de consultar, un modal para contactarse, o un mensaje directo al whatsapp de la ferreteria
                                <button className='my-5 lg:mr-4 lg:my-0'>
                                    Consultar Presupuesto
                                </button>
                                :

                                <button>
                                    Agregar al carrito
                                </button>
                        }
                    </div>

                </div>
            </div>

        </div>
    </>
    )
}

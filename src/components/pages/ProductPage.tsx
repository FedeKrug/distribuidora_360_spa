import React, { useState } from 'react'

const maxCant = 25;

export const ProductPage = () => {
    const [productCant, SetproductCant] = useState<number>(0);

    const handleAdd = () => {
        SetproductCant(c => c + 1 >= maxCant ? 0 : c + 1);
    }
    const handleSubstract = () => {
        SetproductCant(c => c - 1 <= 0 ? 0 : c - 1);
    }

    return (<>
        <h2 className='text-[30px] lg:text-[60px]'>Product Name</h2>
        <div className="m-12">
            <div className='lg:flex justify-between'>
                <img
                    className='h-[300px] lg:h-[450px] rounded-[10px] lg:rounded-[25px] w-full lg:w-2/5'
                    src="../../public/images/bottom_bg_2.png"
                    alt="Product Img"

                />

                <div className=' flex-1 text-start pl-5 lg:pl-10 lg:pt-5 block '>

                    <div className='mb-10'>
                        <span>Acerca de</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus officia est cum suscipit, reiciendis, repellendus veritatis maiores, ipsam ducimus excepturi voluptatum. Suscipit impedit enim atque, aspernatur nostrum ut rem.</p>
                    </div>
                    <div>
                        <hr className='my-5' />
                    </div>
                    <div className=' flex-1 lg:w-fit flex flex-col lg:absolute bottom-[70px]'>
                        <span className='px-3 text-center mb-3'>Cantidad</span>
                        <div className=' bg-gray-400 w-full lg:w-fit rounded-[20px] '>
                            <button className='' onClick={handleAdd}>+</button>
                            <span className='px-3 mx-3 text-black font-bold text-[25px] lg:text-[18px]'>{productCant}</span>
                            <button className='' onClick={handleSubstract}>-</button>
                        </div>
                    </div>
                    <div className='lg:absolute lg:bottom-[-10px] flex flex-col lg:block'>
                        <button className='my-5 lg:mr-4 lg:my-0'>
                            Consultar Presupuesto
                        </button>
                        <button>
                            Agregar al carrito
                        </button>
                    </div>

                </div>
            </div>

        </div>
    </>
    )
}

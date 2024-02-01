import React, { useEffect, useState } from 'react'
import { listasMayoristas } from '../data/listas'
import { MayoristaComponent } from '../components/MayoristaComponent'
import { getAllProductLists } from '../api'
import { ProductListModal } from '../components/admin/ProductListModal'
import { useModal } from '../hooks/useModal'

export const AdminPage = () => {
    const [productListsData, setProductListsData] = useState<any>([])

    const { openModal, modalOpen, closeModal } = useModal();

    const handleGetAllProducts = async () => {
        const productsData = await getAllProductLists();
        setProductListsData(productsData);

    }

    const handleCreateNewList = () => {
        console.log("New List -> falta apuntar a la api")
        openModal();

    }


    useEffect(() => {
        handleGetAllProducts();
    }, [])

    return (<>
        <div className='text-center d-flex flex-column '>
            <h2 className='my-4'>
                Actualizar las listas de productos
            </h2>
            <button className="custom__btn align-self-center" onClick={handleCreateNewList} >Crear Nueva Lista</button>
        </div>

        <div className='d-flex flex-wrap justify-content-center my-4'>
            {
                productListsData?.map((mayorista: any) => (
                    <>
                        <MayoristaComponent {...mayorista} key={mayorista.id} />
                        <ProductListModal dataId={mayorista.id} handleClose={closeModal} show={modalOpen} create />

                    </>
                ))
            }


        </div>
    </>
    )
}

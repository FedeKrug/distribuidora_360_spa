import React, { useEffect, useState } from 'react'
import { listasMayoristas } from '../data/listas'
import { MayoristaComponent } from '../components/MayoristaComponent'
import { getAllProductLists } from '../api'
import { UploadProductListsModal } from '../components/admin/UploadProductListsModal'

export const AdminPage = () => {

    const [productListsData, setProductListsData] = useState<any>([])

    const handleGetAllProducts = async () => {
        const productsData = await getAllProductLists();
        setProductListsData(productsData);

    }

    useEffect(() => {
        handleGetAllProducts();
    }, [])

    return (
        <div className='d-flex flex-wrap justify-content-center my-4'>
            {
                productListsData?.map((mayorista: any) => (
                    <MayoristaComponent {...mayorista} key={mayorista.id} />
                ))
            }
            {/* <UploadProductListsModal /> */}
        </div>
    )
}

import React, { useEffect } from 'react'
import { listasMayoristas } from '../data/listas'
import { MayoristaComponent } from '../components/MayoristaComponent'
import { getAllProductLists } from '../api'

export const AdminPage = () => {

    useEffect(() => {
        getAllProductLists();
    }, [])

    return (
        <div className='d-flex flex-wrap justify-content-center my-4'>
            {
                listasMayoristas.map((mayorista) => (
                    <MayoristaComponent {...mayorista} key={mayorista.id} />
                ))
            }
        </div>
    )
}

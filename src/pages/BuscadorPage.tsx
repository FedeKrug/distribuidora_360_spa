import { ProductsList } from '../components/ProductsList'
import "../styles/styles.css"
export const BuscadorPage = () => {
    return (
        <div className="container mt-5">
            <div className='row'>

                <div className="col-3 text-start mt-4 ">
                    <div className='p-0'>
                        <div className='mb-4 d-block '>
                            <h4 className='fw-bold m-0'>Resultado de buscador</h4>
                            <span className='d-block'>1000 Resultados</span>
                            <div className='d-block applied__filter'>
                                <span >Filtro aplicado</span>
                            </div>
                        </div>
                        <ul className='p-0'>
                            <li style={{ listStyle: "none" }}>Envío gratis</li>
                            <li style={{ listStyle: "none" }}>Llega Hoy</li>
                            <li style={{ listStyle: "none" }}>filtro de ejemplo</li>
                            <li style={{ listStyle: "none" }}>filtro de ejemplo</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='p-0'>
                            <span>Medidas y Dimensiones</span>
                            <li style={{ listStyle: "none" }}>filtro de ejemplo</li>
                            <li style={{ listStyle: "none" }}>filtro de ejemplo</li>
                            <li style={{ listStyle: "none" }}>filtro de ejemplo</li>
                        </ul>
                    </div>
                </div>
                <div className='col-9 text-center d-flex flex-column p-0'>
                    <ul className='d-flex flex-wrap p-0'>
                        <ProductsList />
                    </ul>

                </div>
            </div>

        </div>
    )
}

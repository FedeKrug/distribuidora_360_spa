import { MayoristaType } from '../data/listas'
import { useModal } from '../hooks/useModal'
import "../styles/mayorista.css"
import { ProductListModal } from './admin/ProductListModal';


export const MayoristaComponent = ({ title, photo_url, id, file }: MayoristaType) => {


    const { openModal, modalOpen, closeModal } = useModal();
    const handleUploadFile = () => {
        openModal();
        console.log("File Upload, falta apuntar a la api", { title }, { modalOpen })

    }
    console.log({ file })

    return (
        <>
            <button onClick={handleUploadFile} className='mayorista'>

                <div className="card" style={{ width: "18rem" }}>
                    <img src={photo_url} className="card-img-top" alt={title} />
                    <div className="mayorista-content">
                        <h3 className="card-text">{title}</h3>
                    </div>
                </div>

            </button>
            <ProductListModal handleClose={closeModal} show={modalOpen} dataId={id} title={title} />
        </>
    )
}

import { MayoristaType } from '../data/listas'
import { useModal } from '../hooks/useModal'
import "../styles/mayorista.css"
import { UploadProductListsModal } from './admin/UploadProductListsModal';


export const MayoristaComponent = ({ title, file, photo_url }: MayoristaType) => {

    const { openModal, modalOpen, closeModal } = useModal();
    const handleUploadFile = () => {
        openModal();
        console.log("File Upload, falta apuntar a la api", { title }, { modalOpen })

    }


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
            <UploadProductListsModal handleClose={closeModal} show={modalOpen} />
        </>
    )
}

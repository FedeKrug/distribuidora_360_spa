import { MayoristaType } from '../data/listas'
import "../styles/mayorista.css"


export const MayoristaComponent = ({ mayoristaTitle, id, file, img }: MayoristaType) => {

    const handleUploadFile = () => {
        console.log("File Upload")
    }
    return (

        <button onClick={handleUploadFile} className='mayorista'>

            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt={mayoristaTitle} />
                <div className="mayorista-content">
                    <h3 className="card-text">{mayoristaTitle}</h3>
                </div>
            </div>
        </button>
    )
}

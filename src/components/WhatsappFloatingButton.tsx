import '../whatsappBTN.css'

const baseLink = "https://api.whatsapp.com/send?phone=";
const phoneNumber = '1123865697';
const customMessage = "Hola, me gustaria saber mas acerca de...";
const customLink = baseLink + phoneNumber + '&text=' + customMessage;


export const WhatsappFloatingButton = () => {
    return (
        <div>
            <a href={customLink}
                className="float"
                target="_blank">
                <i className="bi bi-whatsapp my-float"></i>
            </a>
        </div>
    )
}

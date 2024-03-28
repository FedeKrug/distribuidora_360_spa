import "./styles.css";

export const WhatsappButton = () => {
    const phone = '5491121599842';
    const text = 'Hola Distribuidora 360! Quiero consultar sobre...';
    const link = `https://api.whatsapp.com/send?phone=+${phone}&text=${text}`;

    return (
        <>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
            />
            <a href={link} className="float" target="_blank" style={{zIndex:9999}}>
                <i className="fa fa-whatsapp my-float"></i>
            </a>
        </>
    );
};
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { Library } from '@googlemaps/js-api-loader';
import { mapStyle } from './mapStyles';
import { clientsMock } from '../../../constants/clientsMock'

const libraries: Library[] = ["places"];
const mapContainerStyle = {
    width: '100vw',
    height: '50vh'
}
const center = {
    lat: -34.805518,
    lng: -58.415252
}
const options = {
    styles: mapStyle,
    disableDefaultUI: true
}


export const ClientsMap = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_REACT_GOOGLE_MAPS_API,
        libraries
    })


    console.log(import.meta.env.VITE_REACT_GOOGLE_MAPS_API)
    if (loadError) return "error Map"
    if (!isLoaded) return "Loading Map"

    return (
        <>
            <div className="2xl:mx-auto 2xl:container container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                <div className="flex flex-col jusitfy-center items-center space-y-10">
                    <div className="flex flex-col justify-center items-center ">
                        <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Nuestros Clientes</h1>
                    </div>
                </div>
            </div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={5}
                center={center}
                options={options}>
                {clientsMock.map((el, index) => <Marker key={index} position={{ lat: el.latitud, lng: el.longitud }} title={el.nombre} />)}
            </GoogleMap>
        </>
    )
}

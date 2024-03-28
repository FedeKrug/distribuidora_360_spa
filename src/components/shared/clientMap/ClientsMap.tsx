import { useLoadScript } from '@react-google-maps/api'
import { Library } from '@googlemaps/js-api-loader';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMapEvents } from 'react-leaflet/hooks'
import { CircleMarker, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import { LatLngExpression } from 'leaflet';

const libraries: Library[] = ["places"];
const nearOptions = { color: { color: 'red' }, popUpText: 'Entrega personalizada', radio: 20 }
const farOptions = { color: { color: 'blue' }, popUpText: 'Entregas por Correo o expreso', radio: 40 }
const nearLocations = [
    { "nombre": "La Plata", "latLng": [-34.9205, -57.9536], "optionsDistance": nearOptions },
    { "nombre": "Bahía Blanca", "latLng": [-38.7196, -62.2724], "optionsDistance": nearOptions },
    { "nombre": "San Nicolás de los Arroyos", "latLng": [-33.3350, -60.2117], "optionsDistance": nearOptions },
    { "nombre": "Junín", "latLng": [-34.5834, -60.9589], "optionsDistance": nearOptions },
    { "nombre": "Luján", "latLng": [-34.5703, -59.1050], "optionsDistance": nearOptions },
    { "nombre": "Zárate", "latLng": [-34.0934, -59.0297], "optionsDistance": nearOptions },
    { "nombre": "Pergamino", "latLng": [-33.8920, -60.5728], "optionsDistance": nearOptions },
    { "nombre": "Chascomús", "latLng": [-35.5763, -58.0148], "optionsDistance": nearOptions }
]


const farLocations = [{ "nombre": "Córdoba", "latLng": [-31.416668, -64.183334], "optionsDistance": farOptions }, { "nombre": "Rosario", "latLng": [-32.946819, -60.63932], "optionsDistance": farOptions },
{ "nombre": "Santa Fe", "latLng": [-31.63333, -60.7], "optionsDistance": farOptions },
{ "nombre": "Paraná", "latLng": [-31.73333, -60.533329], "optionsDistance": farOptions },
{ "nombre": "San Miguel de Tucumán", "latLng": [-26.824101, -65.222603], "optionsDistance": farOptions },
{ "nombre": "San Juan", "latLng": [-31.5375, -68.536392], "optionsDistance": farOptions },
{ "nombre": "Resistencia", "latLng": [-27.451389, -58.986668], "optionsDistance": farOptions },
{ "nombre": "Corrientes", "latLng": [-27.471209, -58.839562], "optionsDistance": farOptions },
{ "nombre": "Santiago del Estero", "latLng": [-27.79511, -64.26149], "optionsDistance": farOptions },
{ "nombre": "Salta", "latLng": [-24.7859, -65.41166], "optionsDistance": farOptions },
{ "nombre": "Bahía Blanca", "latLng": [-38.7196, -62.2724], "optionsDistance": farOptions },
{ "nombre": "Neuquén", "latLng": [-38.9516, -68.0591], "optionsDistance": farOptions },
{ "nombre": "Comodoro Rivadavia", "latLng": [-45.8641, -67.4966], "optionsDistance": farOptions },
{ "nombre": "Trelew", "latLng": [-43.2489, -65.3050], "optionsDistance": farOptions },
{ "nombre": "Viedma", "latLng": [-40.8135, -62.9967], "optionsDistance": farOptions },
{ "nombre": "Río Gallegos", "latLng": [-51.6232, -69.2166], "optionsDistance": farOptions },
{ "nombre": "Ushuaia", "latLng": [-54.8019, -68.3020], "optionsDistance": farOptions },
{ "nombre": "Puerto Madryn", "latLng": [-42.7683, -65.0381], "optionsDistance": farOptions },
{ "nombre": "Rawson", "latLng": [-43.3000, -65.1000], "optionsDistance": farOptions },
{ "nombre": "Trevelin", "latLng": [-43.0895, -71.4602], "optionsDistance": farOptions }
]

const clientsLocations = [...nearLocations, ...farLocations]


export const ClientsMap = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_REACT_GOOGLE_MAPS_API,
        libraries
    })

    if (loadError) return null
    if (!isLoaded) return null

    return (
        <>
            <div className="2xl:mx-auto 2xl:container container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                <div className="flex flex-col jusitfy-center items-center space-y-10">
                    <div className="flex flex-col justify-center items-center ">
                        <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Nuestros Clientes</h1>
                    </div>
                </div>
            </div>
            <MapContainer
                center={{ lat: -34.61315, lng: -58.37723 }}
                zoom={6}
                scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <div id="map" style={{ height: 500 }}></div>
                <LocationMap />
                {clientsLocations.map(clMap => <CircleMap location={clMap.latLng as LatLngExpression} optionsDistance={clMap.optionsDistance} />)}
            </MapContainer>
        </>
    )
}

const LocationMap = () => {
    const [position, setPosition] = useState<any>(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return (
        <div>{
            position === null ? null : (
                <Marker position={position}>
                    <Popup>Estamos cerca!</Popup>
                </Marker>
            )
        }</div>
    )
}

const CircleMap = ({ location, optionsDistance }: {
    location: LatLngExpression,
    optionsDistance: {
        color: { color: string; }
        popUpText: string;
        radio: number
    }
}) => {
    return (
        <CircleMarker center={location} pathOptions={optionsDistance.color} radius={optionsDistance.radio}>
            <Popup>{optionsDistance.popUpText}</Popup>
        </CircleMarker>
    )
}

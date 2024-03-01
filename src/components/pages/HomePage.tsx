import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import { Slider } from '../Slider'
import { ClientsMap } from '../shared/clientMap/ClientsMap'


export const HomePage = () => {
    return (
        <div>
            <Slider />
            <ClientsMap />
        </div>
    )
}

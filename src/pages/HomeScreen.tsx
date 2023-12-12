import { Slider } from '../components/Slider'
import { ProductsList } from '../components/ProductsList'
import { PaginationComponent } from '../components/PaginationComponent'

export const HomeScreen = () => {
    return (
        <div>
            <Slider />
            <ProductsList />
            <PaginationComponent />
        </div>
    )
}

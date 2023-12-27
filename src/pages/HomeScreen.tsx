import { Slider } from '../components/Slider'
import { ProductsList } from '../components/ProductsList'
import { CategoriesList } from '../components/CategoriesList'




export const HomeScreen = () => {
    return (
        <div>
            <Slider />
            {/* <ProductsList /> */}
            <CategoriesList />
        </div>
    )
}

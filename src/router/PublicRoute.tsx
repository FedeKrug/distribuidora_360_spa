import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { RootState } from '.././store';
import { PrivateRoute } from './PrivateRoute';
import { pages, publicPages } from '../router';
import { SearchComponent } from '../components/SearchComponent';
import { CategoriesComponent } from '../components/CategoriesComponent';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { ProductPage } from '../pages/ProductPage';

export const PublicRoute = () => {
    const { status } = useSelector((state: RootState) => state.auth);

    const sampleProducts = useQuery(api.sampleProducts.get);


    if (status === 'authenticated') {
        return (
            <PrivateRoute>
                <SearchComponent />
                <CategoriesComponent />
                <Routes>
                    {pages.map(({ Component, path }) =>
                        <Route key={path} element={Component} path={path} />)}
                    <Route path='/buscador/:productId' element={<ProductPage products={sampleProducts} />} />
                    {/* <ProductDetailPage articulo={sampleProducts[0].articulo} precio={sampleProducts[0].precio} /> */}


                </Routes>
            </PrivateRoute>
        )
    }

    return (
        <Routes>
            {publicPages.map(({ Component, path }) =>
                <Route key={path} element={Component} path={path} />)}
        </Routes>
    )
}

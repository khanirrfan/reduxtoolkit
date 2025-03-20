import React from 'react';
import { Route, Routes } from 'react-router';
import ProductsView from '../components/products/productView/products';
import ProductItem from '../components/products/productView/ProductItem';
// import ProductRoute from '../components/products/productView'
import LayoutWithSidebar from './LayoutWithSidebar';
import Carts from '../components/cart/cartView/Carts';
import CartsItem from '../components/cart/cartView/CartItem';
// import App from '../App'
import Dashboard from '../components/dashboard/Dashboard';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutWithSidebar />}>
                <Route index element={<Dashboard />} />
                <Route path="product" element={<ProductsView />} />
                <Route path="product/:productId" element={<ProductItem />} />
                <Route path="cart" element={<Carts />} />
                <Route path="cart/:cartId" element={<CartsItem />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;

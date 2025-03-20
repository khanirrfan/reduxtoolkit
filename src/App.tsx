import React from 'react';
import './App.css';

// import { store } from './store/store';
// import { Provider } from 'react-redux';
// import ProductsView from './components/products/productView/products';
// import { Outlet } from 'react-router';
// import AppRoutes from './routes/AppRoutes';
// import { Outlet } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
    return (
        <>
            <AppRoutes />
        </>
    );
}

export default App;

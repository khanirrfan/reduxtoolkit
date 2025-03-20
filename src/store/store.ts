import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../components/products/productReduxActions/productSlice';
import categoryReducer from '../components/categories/categoryReduxAction/categorySlice';
import cartReducer from '../components/cart/cartReduxActions/cartSlice';
import { productApi } from '../components/products/productReduxActions/productApiSlice';
import { categoryApi } from '../components/categories/categoryReduxAction/categoryApiSlice';
import { cartApi } from '../components/cart/cartReduxActions/cartApiSlice';

export const store = configureStore({
    reducer: {
        product: productReducer,
        [productApi.reducerPath]: productApi.reducer,
        category: categoryReducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        cart: cartReducer,
        [cartApi.reducerPath]: cartApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            productApi.middleware,
            categoryApi.middleware,
            cartApi.middleware
        );
    }
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

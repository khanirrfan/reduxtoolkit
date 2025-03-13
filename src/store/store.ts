import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/products/productSlice";
import categoryReducer from "../feature/categories/categorySlice";
import { productApi } from "../feature/products/productApiSlice"
import { categoryApi } from "../feature/categories/categoryApiSlice";

export const store = configureStore({
    reducer:{
        product: productReducer,
        [productApi.reducerPath]: productApi.reducer,
        category: categoryReducer,
        [categoryApi.reducerPath]: categoryApi.reducer
    },
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware, categoryApi.middleware)
    }
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>
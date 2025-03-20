// DUCK pattern

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '../../../types/products';

const initialState: Products = {
    data: [],
    categories: [],
    products: [],
    total: 0,
    skip: 0,
    limit: 0
};

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Products>) {
            // immer makes this immutable under the hood
            state.data = action.payload.products;
            state.categories = [...new Set(action.payload.products.map((item) => item.category))];
            state.products = action.payload.products;
            state.total = action.payload.total;
            state.skip = action.payload.skip;
            state.limit = action.payload.limit;
        },
        // filter products
        filterProducts(state, action: PayloadAction<string[]>) {
            if (action.payload.length > 0) {
                state.products = state.data.filter((item) => {
                    return action.payload.includes(item.category);
                });
            } else {
                state.products = state.data;
            }
        }
        // filterCategories(state, action: PayloadAction<Products>) {

        // }
    }
});

export const { setProducts, filterProducts } = productSlice.actions;

export default productSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartData } from '../../../types/carts';

const initialState: CartData = {
    carts: [],
    total: 0,
    skip: 0,
    limit: 0
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        setCartItems(state, action: PayloadAction<CartData>) {
            const { carts, total, skip, limit } = action.payload;
            state.carts = carts;
            state.total = total;
            state.skip = skip;
            state.limit = limit;
        }
    }
});

export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;

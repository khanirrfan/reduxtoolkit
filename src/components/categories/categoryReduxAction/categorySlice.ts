import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '../../../types/products';

const initialState = {
    // define state parameters
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setCategories(state, action: PayloadAction<Products>) {
            // write your logic to set categories
        }
    }
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;

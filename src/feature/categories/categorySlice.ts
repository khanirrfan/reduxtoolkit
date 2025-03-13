import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Products } from "../../types/types"

const initialState = {
    // define state parameters
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategories(state, action:PayloadAction<Products>){
            // write your logic to set categories
        }
    }
});

export const {setCategories} = categorySlice.actions;
export default categorySlice.reducer;
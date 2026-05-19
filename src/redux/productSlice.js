import { createSlice } from '@reduxjs/toolkit';
import productData from '../data/products';

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: productData,
        search: "",
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    },
});

export const { setSearch } = productSlice.actions;
export default productSlice.reducer;
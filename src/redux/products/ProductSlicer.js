import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../product-crude";

const ProductSlicer = createSlice({
    name: "products",
    initialState: {
        counter: 0,
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        increment: (state) => {
            state.counter++;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.status = "successed"
                state.data = payload
            })
    }
})

export const { increment } = ProductSlicer.actions

export default ProductSlicer.reducer



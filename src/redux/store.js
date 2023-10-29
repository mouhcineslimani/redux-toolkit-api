import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./products/ProductSlicer";



const store = configureStore({
    reducer: {
        "products": ProductReducer,
    }
})

export default store;
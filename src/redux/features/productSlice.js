import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProducts: (state, {payload}) => {
            const productIndex = state.cart.findIndex(cart => cart.id === payload.id);

            if(productIndex < 0) state.cart = [...state.cart, payload]
            else state.cart[productIndex].quantity += 1;
        },
        updateProductQuantity: (state, { payload}) => {
            const productIndex = state.cart.findIndex(cart => cart.id === payload.id);

            state.cart[productIndex].quantity = payload.quantity
        },
        removeProduct: (state, { payload}) => {
            state.cart = state.cart.filter(cart => cart.id !== payload);
        }
    }
})

export const { addProducts, updateProductQuantity, removeProduct } = productSlice.actions;
export default productSlice.reducer;
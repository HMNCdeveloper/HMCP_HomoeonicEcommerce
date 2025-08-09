import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    isCartOpen: false,
    isCheckoutOpen: false,
    isCheckoutComplete: false,
    isCheckoutError: false,
    isCheckoutLoading: false,
    checkoutErrorMessage: '',
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { product, quantity , unit_price , name} = action.payload;
            const existingItem = state.items.find(i => i.product === product);
        
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({ product, quantity , unit_price, name});
            }
            state.totalQuantity += quantity;
        },
        changeQuantity(state, action) {
            const { product, quantity }  = action.payload;
            const indexProductId = state.items.findIndex(i => i.product === product);
            if (quantity>0) {
                state.items[indexProductId].quantity = quantity;
            }else {
                state.items=(state.items).filter(i => i.product !== product);
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
        toggleCart(state) {
            state.isCartOpen = !state.isCartOpen;
        },
        toggleCheckout(state) {
            state.isCheckoutOpen = !state.isCheckoutOpen;
        },
        setCheckoutComplete(state, action) {
            state.isCheckoutComplete = action.payload;
        },
        setCheckoutError(state, action) {
            state.isCheckoutError = action.payload.error;
            state.checkoutErrorMessage = action.payload.message;
        },
        setCheckoutLoading(state, action) {
            state.isCheckoutLoading = action.payload;
        },
    },
});


export const {
    addToCart,
    changeQuantity,
    clearCart,
    toggleCart,
    toggleCheckout,
    setCheckoutComplete,
    setCheckoutError,
    setCheckoutLoading,
} = cartSlice.actions;


export default cartSlice.reducer;
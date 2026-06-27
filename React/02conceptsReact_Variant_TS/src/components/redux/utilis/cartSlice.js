import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[]
}
const cartSlice=createSlice({
      // name
    // initialState
    // reducers
    name:"cartSlice",
    initialState,
    reducers:{
        //action>>addItem , removeItem,clearCart
        addItem:(state)=>{},
        removeItem:(state)=>{},
        clearCart:(state)=>{}
    }
})

// action export
export const {addItem,removeItem,clearCart}=cartSlice.actions
// reducer export
export default cartSlice.reducer
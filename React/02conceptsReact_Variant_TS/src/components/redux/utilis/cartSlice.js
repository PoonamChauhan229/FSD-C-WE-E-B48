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
        // click on btn >> add the item to the cart >> itme - payload 
        addItem:(state,action)=>{
            state.items.push(action.payload) // add to the array
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items=[]
        }
    }
})

// action export
export const {addItem,removeItem,clearCart}=cartSlice.actions
// reducer export
export default cartSlice.reducer


//15 min


// task to create user slice >> 
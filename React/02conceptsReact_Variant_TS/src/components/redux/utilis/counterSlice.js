import { createSlice } from "@reduxjs/toolkit";

// state >> value 
const initialState={
    value:0
}

const counterSlice=createSlice({
    // name
    // initialState
    // reducers
    name:"counter",
    initialState,
    reducers:{
        // action >>increment, decrement, double,reset
        increment:(state)=>{
            console.log(state)
        },
        decrement:(state)=>{},
        double:(state)=>{},
        reset:(state)=>{}
    }
})

// action export
export const {increment,decrement,double,reset}=counterSlice.actions
// reducers exports
export default counterSlice.reducer
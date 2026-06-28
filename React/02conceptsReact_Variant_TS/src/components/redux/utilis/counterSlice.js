import { createSlice } from "@reduxjs/toolkit";

// state >> value 
const initialState={
    value:0,
    incrementedValue:1,
    decrementedValue:20,
    doubledValue:5,
    resetValue:10,
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
            state.value += 1;
            state.incrementedValue+=1           
        },
        decrement:(state)=>{
            state.value -= 1
            state.decrementedValue-=1
        },
        double:(state)=>{
             state.value=state.value*2;
              state.doubledValue=state.doubledValue*2;
        },
        reset:(state)=>{
            state.value=0;
            state.resetValue=0
        },
        getIntialValues:(state)=>{
            state.value = 0;
            state.incrementedValue=1  
            state.decrementedValue=20
            state.doubledValue=5
            state.resetValue=10
        },
         resetAllValues:(state)=>{
            state.value = 0;
            state.incrementedValue=0  
            state.decrementedValue=0
            state.doubledValue=0
            state.resetValue=0
        }
    }
})

// action export
export const {increment,decrement,double,reset,getIntialValues,resetAllValues}=counterSlice.actions
// reducers exports
export default counterSlice.reducer
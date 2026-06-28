// Configure Store
import { configureStore } from '@reduxjs/toolkit'
import counterReducers from './counterSlice'
import cartReducers from './cartSlice'
import { movieApi } from '../services/movieApi'

export const store = configureStore({
   // slices {}
   reducer: {
      counter: counterReducers,
      cartSlice: cartReducers,
      [movieApi.reducerPath]: movieApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
})

// store  >> where u are going to put ur data
// slice
// reducer
// reducers
// Provider
// action
// dispatch
// hooks >>


// Step1: Configure Store  >> '@reduxjs/toolkit'
// Step2 : Store to your App >> Provider >> 'react-redux'
// Step3 : Create SLice
// Step 4: Provide SLice to the Store
// Step 5 : Check in DEv Tools for initial State Load



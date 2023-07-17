import {configureStore}  from '@reduxjs/toolkit'
import  counterSlice  from './cartReducer';
import  userSlice from './userSlice'
import  UserLogin from './loginSlice'
import  UploadProduct from './productSlice'




export const store = configureStore({
    reducer:{
        cart: counterSlice,
        register: userSlice,
        product:UploadProduct,
        login:UserLogin
        
    },
  })
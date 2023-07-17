import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import User from "../api/userService";
import { UserAuth } from "../userAuth";




const initialState={
     loading:false,
     error:false,
     success:false,
     message : '',
     user:{
        name:null,
        phone:null,
        type:null,
     }
     
     
}

export const Login = createAsyncThunk('login/Login',async(data,thunkAPI) => {

          return await User.login(data)
    

})

 const UserLogin = createSlice({
    name:"login",
    initialState,
    reducers:{
        reset:(state,action)=>{
            state.success = false
            state.error = false
            //state.message=false
            state.loading=false
        },
        logout:(state,action)=>{
            localStorage.removeItem('user')
        },
        
        
    },

    extraReducers:(builder) => {
            builder
            .addCase(Login.pending,(state,action)=>{
                state.loading=true
                state.error=false
                state.success=false
                
            })
            .addCase(Login.fulfilled,(state,action)=>{
                state.success = true
                state.loading=false
                state.error = false
                state.user=action.payload
                localStorage.setItem("user", JSON.stringify(action.payload));
                
             
                
            })
           .addCase(Login.rejected,(state,action)=>{
                state.loading=false
                state.error=true
                state.message=action.payload   
            })
    }

})

export const {reset}=UserLogin.actions
export default UserLogin.reducer 
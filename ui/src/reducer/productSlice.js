import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState={
    loading:false,
    error:false,
    success:false,
    message:'',
    cetegory:[],
    cetloading:false,
    cetsuccess:false,
    ceterror:false,
    iscreated:false,
    subcetsuccess:false,
    subceterror:false,
    subcetloading:false,
    cetegorycreated:false,
    subcetegorycreated:false,
    cetegoryDelete:false,
    DeleteSC:false,
    rejectedCetegory:false,
    rejectedsubCetegory:false,

}
//const API = 'https://api.pureaam.com'
const API = 'http://localhost:4000'

export const UploadFile = createAsyncThunk ('uploadProduct/UploadFile',async(state,thunkAPI)=>{

      try {
       const responce = await  axios({
        method:'post',
        url:`${API}/admin`,
        data:state,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data'
         },
        withCredentials:true
        })

        return responce
      } catch (error) {
        const message=(error.response && error.response.data &&error.response.data.message)||
        error.message||error.toString()
   return thunkAPI.rejectWithValue(message)
      }
})

export const updateProduct = createAsyncThunk ('uploadProduct/updateProduct',async(state,thunkAPI)=>{

  try {
   const responce = await  axios.post(`${API}/admin/update`,state,{withCredentials:true})

    return responce
  } catch (error) {
    const message=(error.response && error.response.data &&error.response.data.message)||
    error.message||error.toString()
return thunkAPI.rejectWithValue(message)
  }
})

export const createCetegory = createAsyncThunk ('uploadProduct/CreateCetegory',async(state,thunkAPI)=>{
  try {
   const responce = await  axios.post(`${API}/admin/createCetegory`,state,{withCredentials:true})
    return responce
  } catch (error) {
    const message=(error.response && error.response.data &&error.response.data.message)||
    error.message||error.toString()
return thunkAPI.rejectWithValue(message)
  }
})

export const getCetegory = createAsyncThunk ('uploadProduct/getCetegory',async(state,thunkAPI)=>{
  try {
   const responce = await  axios.get(`${API}/admin/getCetegory`,state,{withCredentials:true})
    return responce.data
  } catch (error) {
    const message=(error.response && error.response.data &&error.response.data.message)||
    error.message||error.toString()
return thunkAPI.rejectWithValue(message)
  }
})

export const deleteCetegory = createAsyncThunk ('uploadProduct/deleteCetegory',async(state,thunkAPI)=>{
  try {
    console.log(state)
   const responce = await  axios.post(`${API}/admin/deleteCetegory`,state,{withCredentials:true})
    return responce.data
  } catch (error) {
    const message=(error.response && error.response.data &&error.response.data.message)||
    error.message||error.toString()
return thunkAPI.rejectWithValue(message)
  }
})

export const deleteSubCetegory = createAsyncThunk ('uploadProduct/deleteSubCetegory',async(state,thunkAPI)=>{
  try {
   const responce = await  axios.post(`${API}/admin/deletesubcetegory`,state,{withCredentials:true})
    return responce.data
  } catch (error) {
    const message=(error.response && error.response.data &&error.response.data.message)||
    error.message||error.toString()
return thunkAPI.rejectWithValue(message)
  }
})

export const getSubCetegory = createAsyncThunk ('uploadProduct/getCetegory',async(state,thunkAPI)=>{
  try {
   const responce = await  axios.get(`${API}/admin/getCetegory`,state,{withCredentials:true})
    return responce.data
  } catch (error) {
    const message=(error.response && error.response.data &&error.response.data.message)||
    error.message||error.toString()
return thunkAPI.rejectWithValue(message)
  }
})
export const createSubCetegory = createAsyncThunk ('uploadProduct/createSubCetegory',async(state,thunkAPI)=>{
  try {
    console.log('this is from redux')
    console.log(state)
   const responce = await  axios.post(`${API}/admin/createSubCetegory`,state,{withCredentials:true})
   return responce
  } catch (error) {
    const message=(error.response && error.response.data &&error.response.data.message)||
    error.message||error.toString()
return thunkAPI.rejectWithValue(message)
  }
})


const UploadProduct =createSlice({
    name:'uploadProduct',
    initialState,
    reducers:{
        Reset:(state,action)=>{
          state.error= false
          state.success = false
          state.loading = false  
          state.message = ""
          state.cetsuccess=false
          state.cetloading=false
          state.iscreated=false
          state.cetegorycreated=false
          state.cetegoryDelete=false
          state.subcetloading = false
          state.subcetsuccess = false
          state.subceterror = false
          state.DeleteSC = false
          state.rejectedCetegory =false
          state.rejectedsubCetegory = false
        }
    },
    extraReducers:(builder) => {
  
        builder.addCase(UploadFile.pending,(state,action) => {
              state.loading = true
              state.success=false
              state.error=false
        })
        builder.addCase(UploadFile.fulfilled,(state,action) => {
            state.error=false
            state.success = true
            state.loading = false
            state.message = "Product has been uploaded succesfully"
           
      })
      builder.addCase(UploadFile.rejected,(state,action) => {
        state.error= true
        state.success = false
        state.loading = false 
        state.message = "Product Upload Failed Try again"
  })



                builder.addCase(createCetegory.pending,(state,action) => {
                  state.iscreated=false
              })  
                builder.addCase(createCetegory.fulfilled,(state,action) => {
                 state.iscreated=true
              })  
              builder.addCase(createCetegory.rejected,(state,action) => {
                state.iscreated=false
              })

          builder.addCase(getCetegory.pending,(state,action) => {
            state.cetloading=true
            state.cetsuccess=false
           state.ceterror=false
        })  
          builder.addCase(getCetegory.fulfilled,(state,action) => {
           // console.log(action.payload)
          state.cetegory=action.payload
          state.cetloading=false
          state.cetsuccess=true
         state.ceterror=false
        })  
        builder.addCase(getCetegory.rejected,(state,action) => {
          state.cetloading=false
          state.cetsuccess=false
         state.ceterror=true
        })

        builder.addCase(createSubCetegory.pending,(state,action) => {
          state.subcetloading=true
          state.subcetsuccess=false
         state.subceterror=false
        })  
          builder.addCase(createSubCetegory.fulfilled,(state,action) => {
          state.subcetloading=false
          state.subcetsuccess=true
          state.subceterror=false
          
        })
        builder.addCase(createSubCetegory.rejected,(state,action) => {
          state.subcetloading=false
          state.subcetsuccess=false
         state.subceterror=true
        })

        builder.addCase(deleteCetegory.pending,(state,action)=>{
          state.cetegoryDelete=false
          
        })
        builder.addCase(deleteCetegory.fulfilled,(state,action)=>{
          state.cetegoryDelete=true
        
        })
        builder.addCase(deleteCetegory.rejected,(state,action)=>{
          state.cetegoryDelete=false 
          state.message = action.payload
          state.rejectedCetegory=true
        })

       //Delete SUbCEREGORY
        builder.addCase(deleteSubCetegory.pending,(state,payload)=>{
          state.DeleteSC=false
        })
        builder.addCase(deleteSubCetegory.fulfilled,(state,payload)=>{
          state.DeleteSC=true
        })
        builder.addCase(deleteSubCetegory.rejected,(state,payload)=>{
          state.DeleteSC=false
          state.rejectedsubCetegory = true
        })
      

    }

})

export const {Reset} = UploadProduct.actions
export default UploadProduct.reducer
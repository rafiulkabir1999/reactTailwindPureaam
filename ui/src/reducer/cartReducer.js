import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
    items:[],
    total:0,
    loading:false,
    Product:{
     
      Eletronics:{
      Men:[],
      Women:[],
      Boy:[],
      Girl:[],
      Baby:[]
     }, 
     Cake:{
      Men:[],
      Women:[],
      Boy:[],
      Girl:[],
      Baby:[]
     },
     Food:{
      Men:[],
      Women:[],
      Boy:[],
      Girl:[],
      Baby:[]
     }, 
     Watch:{
      Men:[],
      Women:[],
      Boy:[],
      Girl:[],
      Baby:[]
     },
     Chocolate:{
      Men:[],
      Women:[],
      Boy:[],
      Girl:[],
      Baby:[]
     }, 
     Jewelery:{
      Men:[],
      Women:[],
      Boy:[],
      Girl:[],
      Baby:[]
     },
     Sunglass:{
      Men:[],
      Women:[],
      Boy:[],
      Girl:[],
      Baby:[]
     }, 
     Other:{
      Men:[],
      Women:[],
      Boy:[],
      Girl:[],
      Baby:[]
     }
    },
    Result:[],
    Cetegory:[],
    error:false,
    TotalMoney:null,
    searchProduct:null,
    searchProductrejected:false,
}
const API = 'http://localhost:4000'

export const fetchProduct = createAsyncThunk('cart/fetchProduct',async (state,action) => {
    try {
        const api =`${API}/product/`+state
        
        let Data=await axios.get(api)
       // console.log(Data)
        return Data.data;

    } catch (error) {
      throw Error(error)
    }
  })
export const fetch_product_search = createAsyncThunk('cart/fetch_product_search',async (state,action) => {
  try {
    let product = await axios.get(API +'/product/search/'+ state )
    console.log(product)
    return product.data;
  } catch (error) {
    throw Error(error)
  }
})
  export const Order = createAsyncThunk('cart/order',async (state,action) => {
    try {
        const api =`${API}/order`
        //console.lo
        let Data=await axios.post(api,state)
       // console.log(Data)
        return Data.data;

    } catch (error) {
      throw Error(error)
    }
  })

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart: (state=initialState,action) => {      
            const {name,cetegory,subcetegory,price,url,_id} = action.payload
            
            const product = {
              name,
              cetegory,
              subcetegory,
              price,
              url,
              _id,
              quantity:1
            }
           if(state.items.length === 0){
            state.items.push(product); 
            state.total =+ state.items.length
            }
          //console.log(action.payload)
           const found = state.items.find(e => e._id === action.payload._id)
           
           if(!found){
            state.items.push(product); 
            state.total =+ state.items.length
           }
           
          },
    removetoCart: (state,action) => {
      
           const newItem = state.items.filter(e => e._id != action.payload._id)
           state.items=newItem
           state.total=state.items.length
     
        //console.log(Remove)
    },
    addQuantity:(state,action)=>{
      const item = state.items.find(e => e._id === action.payload._id)
      if (item.quantity >= 1 && item.quantity < 10) {
        item.quantity = item.quantity + 1
      }
    },
    removeQuantity:(state,action) => {
      const item = state.items.find(e => e._id === action.payload._id)
     if (item.quantity > 1 && item.quantity <= 10) {
       item.quantity = item.quantity - 1
     }
    },
    Reset:(state,action ) => {
       state.searchProductrejected = false
    }
    
    
  
   
  },
  extraReducers:(builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
 
    builder.addCase(fetchProduct.pending, (state, action) => {
      // Add user to the state array
      //console.log(action.payload)
        
        state.error=false
        state.loading=true
     
      
    })
     builder.addCase(fetchProduct.fulfilled, (state, action) => {
     
      //console.log(action.payload[0])
                const item =state.Cetegory.length + 1
                state.Cetegory.splice(0, item);
                state.Result = action.payload
      action.payload.map(e => {
              
                state.Cetegory.push(e) 
                state.loading= false
     })
      
    })


    builder.addCase(fetchProduct.rejected, (state, action) => {
      // Add user to the state array
      //console.log(action.payload)
          
        state.loading=false
        state.error=true
   
      
    })

    builder.addCase(fetch_product_search.fulfilled, (state,action) => {
       state.searchProduct = action.payload
    })
    builder.addCase(fetch_product_search.rejected, (state,action) => {
      state.searchProductrejected = true
   })
  

    builder.addCase(Order.pending, (state, action) => {
      // Add user to the state array
      //console.log(action.payload)
        
        state.error=false
        state.loading=true
     
      
    })
     builder.addCase(Order.fulfilled, (state, action) => {
     
      //console.log(action.payload[0])
                const item =state.Cetegory.length + 1
                state.Cetegory.splice(0, item);
                state.Result = action.payload
      action.payload.map(e => {
              
                state.Cetegory.push(e) 
                state.loading= false
     })
      
    })


    builder.addCase(Order.rejected, (state, action) => {
      // Add user to the state array
      //console.log(action.payload)
          
        state.loading=false
        state.error=true
   
      
    })

  },
})

// Action creators are generated for each case reducer function
export const { addtoCart, decrement,removetoCart,addQuantity,removeQuantity ,Reset} = counterSlice.actions;
export default counterSlice.reducer;


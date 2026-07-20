import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
const theToken = localStorage.getItem("token")
import { serverHost } from "@/other/data";
const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${theToken}`     
    }
export const userData = createAsyncThunk("user/get_data",async()=>{
const request = await fetch(`${serverHost}user/get-infromations`,{
    headers,
})
      return await  request.json()
})
export const deletAccount = createAsyncThunk("user/delete",async()=>{
const request = await fetch(`${serverHost}user/delete`,{
      headers,
      method:"DELETE"
})
const respond = await request.json()
return respond
})
export const updateData = createAsyncThunk("user/update_data",async(payload:any)=>{
const isFormData = payload instanceof FormData;
const theheaders:any = {
    'Authorization': `Bearer ${theToken}`
  };

  if (!isFormData) {
    theheaders['Content-Type'] = 'application/json';
  }
let body;
  if (!isFormData) {
    body = JSON.stringify({
      EditType: payload.entrieType,
      editValue: payload.entrie,
      lng:payload.lng
    });
  } else {
    body = payload;
  }
const request = await fetch(`${serverHost}user/up_date`,{
method: 'PUT',
headers:theheaders,
body:body
})
const data = await  request.json()
return data
})
const  initialState:any = {
    done:false,
    change:undefined,
    data:{}
  }
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    get_data:(state,action)=>{
      state.done = action.payload
    },
    reset_value:(state)=>{
      state.change = undefined
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(userData.pending,(state)=>{
      state.done = null
    })
    builder.addCase(userData.rejected,(state)=>{
      state.done = false
    })
    builder.addCase(userData.fulfilled,(state,action)=>{
      state.done =  action.payload.done
      state.data = action.payload
    })
    builder.addCase(updateData.pending,(state)=>{
      state.done = null
      state.change = null
    })
    builder.addCase(updateData.rejected,(state)=>{
      state.done = false
    })
    builder.addCase(updateData.fulfilled,(state,action)=>{
      state.done =  action.payload.done
      state.change = true
      state.data = action.payload
    })
    builder.addCase(deletAccount.pending,(state)=>{
      state.done = null
    })
    builder.addCase(deletAccount.rejected,(state)=>{
      state.done = false
    })
    builder.addCase(deletAccount.fulfilled,(state)=>{
      state.done = true
      state.data = null
    })
  }
})
export const { get_data ,reset_value} = userSlice.actions
export default userSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
  name: 'user',
  initialState:{
    name:"Rajesh Nagar"
  },
  reducers: {
    
  },
})


export const {  } = userSlice.actions
export default userSlice.reducer
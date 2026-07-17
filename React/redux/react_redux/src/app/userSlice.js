import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const insert_user = createAsyncThunk('insert_middleware', async (formvalue) => {
  const res = await axios.post(`http://localhost:3000/user`, formvalue);
  return res;
});

export const delete_user= createAsyncThunk('delete', async (id) => {
  const res = await axios.delete(`http://localhost:3000/user/${id}`);
  return res;
});

export const update_user= createAsyncThunk('update', async (formvalue) => {
  const res = await axios.put(`http://localhost:3000/user/${formvalue.id}`,formvalue);
  return res;
});


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    name: "Rajesh Nagar"
  },
  reducers: {

  },
})



export const { } = userSlice.actions
export default userSlice.reducer
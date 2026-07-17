
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const insert_contact = createAsyncThunk('insert_middleware', async (formvalue) => {
  const res = await axios.post(`http://localhost:3000/contact`, formvalue);
  return res;
});

export const delete_contact= createAsyncThunk('delete', async (id) => {
  const res = await axios.delete(`http://localhost:3000/contact/${id}`);
  return res;
});

export const update_contact= createAsyncThunk('update', async (formvalue) => {
  const res = await axios.put(`http://localhost:3000/contact/${formvalue.id}`,formvalue);
  return res;
});


export const contactSlice = createSlice({
  name: 'contact',
  initialState:{

  },
  reducers: {
    
  },
})


export const {  } = contactSlice.actions
export default contactSlice.reducer
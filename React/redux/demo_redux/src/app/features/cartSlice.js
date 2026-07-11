import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name: 'cart',
    initialState: {
        name: "Raj nagar",
        number: 1,
        isImage: true
    },
    reducers:{
        Change:(state)=>{
            return{...state,name:"Nirav Nagar"}
        },
        Plus:(state)=>{
            return{...state,number:state.number+1}
        },
        Minus:(state)=>{
            return{...state,number:state.number-1}
        },
        Hide:(state)=>{
            return{...state,isImage:false}
        },
        Show:(state)=>{
            return{...state,isImage:true}
        },
        Toggle:(state)=>{
            return{...state,isImage:!state.isImage}
        },

    }
});

export const { Change,Plus,Minus,Hide,Show,Toggle } = cartSlice.actions 

export default cartSlice.reducer;
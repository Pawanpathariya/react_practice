import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
    name:"colorChange",
    initialState:{colorval:"red"},
    reducers:{
      changeColor:(state,actions)=>{
      state.colorval=actions.payload;
  },
    }
})


export default colorSlice.reducer;

export const {changeColor}=colorSlice.actions;
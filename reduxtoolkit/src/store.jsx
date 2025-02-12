import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./slices/colorSlice";
const store= configureStore({
    reducer:{
   color:colorSlice
    }
})

export default store
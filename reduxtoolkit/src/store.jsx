import { configureStore } from "@reduxjs/toolkit";
import todo from "./slices/todoSlice";
const store= configureStore({
    reducer:{
    todoSlice:todo
    }
})

export default store 
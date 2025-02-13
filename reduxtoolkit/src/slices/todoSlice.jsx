import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{task:[]},
    reducers:{
      addTask(state,action){
        state.task.push(action.payload);
      },
      delTask(state,action){
        state.task=state.task.filter((key)=>key.id!=action.payload.id)
      },
      statuscom(state,action){
        for(let i=0;i<state.task.length;i++){
          if(state.task[i].id==action.payload.id){
            state.task[i].status=true
          }
      }
  },
  statusIncom(state,action){
    for(let i=0;i<state.task.length;i++){
      if(state.task[i].id==action.payload.id){
        state.task[i].status=false
      }
  }
}
    }
})
export const {addTask,delTask,statuscom,statusIncom} =todoSlice.actions

export default todoSlice.reducer;

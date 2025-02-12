import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { changeColor } from "./slices/colorSlice";
const App=()=>{
  const [col,setcol]=useState("");
  const dispatch=useDispatch();
  const mycolor=useSelector((state)=>state.color.colorval)
  return(
    <>
   Enter Color <input type="text" name="" id="" value={col} onChange={(e)=>setcol(e.target.value)}/> 
   <button onClick={()=>dispatch(changeColor(col))}>Change</button>
   <br /> <br />
   <div style={{width:"200px",height:"200px",background:mycolor}}>

   </div>
    </>
  )
}

export default App;
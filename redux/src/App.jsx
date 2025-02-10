import { useCallback,useState } from "react";
import Call2 from "./Call2";
const App=()=>{     
    const [count,setcount]=useState(0);
    const [task,settask]=useState([]); 

    const myAdd=()=>{
        settask(values=>[...values, "New Task"])
    }

    const MyTaskAdd=useCallback(myAdd,[task])
    return(
        <>
        <Call2 task={task} addtask={MyTaskAdd} />
       <button onClick={()=>setcount(count+1)}>Click here</button>
       count:{count}
        </>
    )
}

export default App;
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import { addTask ,delTask,statusIncom,statuscom,taskEdit} from "./slices/todoSlice";
const App=()=>{
  const dispatch=useDispatch();
  const [task,setTask]=useState("");
  const [myid,setmyid]=useState("");
  const [btnst,setbtnst]=useState(true);
  const mytask=useSelector(state=>state.todoSlice.task)
const myedit=(id,work)=>{
  setTask(work);
  setmyid(id);
  setbtnst(false);
}

const myupdate=()=>{
dispatch(taskEdit({id:myid,work:task}))
setbtnst(true);
}

var sn=0;
  const ans=mytask.map((item)=>
  { sn++;
    return(
    <tr style={{textAlign:"center"}}>
      <td>{sn}</td>
      <td>
        {item.status ? (
                    <span style={{ color: "green",textDecoration:"line-through" }}>{item.work}</span>

        ) : (
          <span >{item.work}</span>
        )}
      </td>
      <td><button style={{backgroundColor:"red",color:"white", border: "none",padding:"5px",borderRadius:"10px"}} onClick={()=>dispatch(delTask({id:item.id}))}>Delete</button></td>
       <td> 
        {item.status ? (
          <button style={{backgroundColor:"orange",color:"white", border: "none",padding:"5px",borderRadius:"10px"}} onClick={() => dispatch(statusIncom({ id: item.id }))}>Uncomplete</button>
        ) : (
          <button style={{backgroundColor:"green",color:"white", border: "none",padding:"5px",borderRadius:"10px"}} onClick={() => dispatch(statuscom({ id: item.id }))}>Complete</button>
        )}
        </td>
       <td><button style={{backgroundColor:"blue",color:"white", border: "none",padding:"5px",borderRadius:"10px"}} onClick={()=>{
        myedit(item.id,item.work)
       }} >Edit</button></td>

    </tr>
    )
  }
)
  return(
    <>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"500px", margin:"auto"}}>
      <h1>Todo App</h1>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"}}>
      <input type="text" style={{width:"300px",padding:"10px",borderRadius:"10px",border:"1px solid black",marginLeft:"10px"}} value={task} onChange={(e)=>setTask(e.target.value)}/>

{btnst?
      <button style={{width:"100px",backgroundColor:"green",color:"white",borderRadius:"10px",border:"none",padding:"10px",cursor:"pointer",marginLeft:"10px"}} onClick={()=>dispatch(addTask({work:task,id:Date.now(),status:false})) }>Add</button>:
      <button style={{width:"100px", backgroundColor:"red",color:"white", border: "none",padding:"10px",borderRadius:"10px"}} onClick={myupdate}>Edit Task</button>
}
    </div>
 
 <Table striped bordered hover>
      <thead>
        <tr style={{textAlign:"center"}}>
          <th>Sno.</th>
          <th>Task</th>
          <th>Delete</th>
          <th>Change Status</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
{ans}

        </tbody>
    </Table>

 </div>
    </>
  )
}

export default App;
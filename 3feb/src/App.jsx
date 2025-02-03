
import { useState } from "react";

const App=()=>{
const [name,setName]=useState("");
const [city,setcity]=useState("");
const handlesubmit=()=>{
  const input ={name:name,city:city}
  console.log(input);
}
  return(
    <>
   <h1>Application form</h1>

   Enter Name : <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br />
   Enter City : <input type="text" value={city} onChange={(e)=>setcity(e.target.value)} /> <br />
   <button onClick={handlesubmit}>Submit</button>
    </>
  )
}

export default App;
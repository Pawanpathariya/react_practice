
import { useState } from "react";

const App=()=>{
  const [data,setData]=useState({})
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData(values=>({...values,[name]:value}))
  }

  const handleSubmit=(e)=>{
    console.log(data);
    
  }
  return(
    <>
   <h1>Application form</h1>
Enter Name : <input type="text" name="name" value={data.name} onChange={handleInput} /> <br />
Enter city : <input type="text" name="city" value={data.city} onChange={handleInput} /> <br /> 
Enter Subject : <input type="text" name="subject" value={data.subject} onChange={handleInput} /> <br /> 
Enter Fees : <input type="text" name="fees"value={data.fees}  onChange={handleInput} /> <br />


<button onClick={handleSubmit}>Submit</button>
    </>
  )
} 

export default App;
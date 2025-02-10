import { useState,useMemo } from "react";
const App=()=>{
    const [add,setadd]=useState(0);
    const[sub,setsub]=useState(100);

const Mymul=useMemo(()=>{
    console.log("**********");
    return add*2;
},[add])

    return (
        <>
        <h1>My multi {Mymul}</h1>
            <h1>Addition {add}</h1>
            <button onClick={()=>setadd(add+1)}>Add</button>
            <h1>Substractin {sub}</h1>
            <button onClick={()=>setsub(sub-1)}>Sub</button>
        </>
    )
}

export default App;
import { useState,useMemo } from "react";
// const App=()=>{
//     const [add,setadd]=useState(0);
//     const[sub,setsub]=useState(100);

// const Mymul=useMemo(()=>{
//     console.log("**********");
//     return add*2;
// },[add])

//     return (
//         <>
//         <h1>My multiplication : {Mymul}</h1>
//             <h1>Addition : {add}</h1>
//             <button onClick={()=>setadd(add+1)}>Add</button>
//             <h1>Substractin : {sub}</h1>
//             <button onClick={()=>setsub(sub-1)}>Sub</button>
//         </>
//     )
// }

// export default App;






const App=()=>{
    const [num,setnum]=useState(0);
    const[city,setcity]=useState("");
const mymul=()=>{
    for(var i=0;i<1000000000;i++){}
        return num*2;
}

    const Mymul=useMemo(mymul,[num])


return(
<>
<h1>Enter Number <input type="number" value={num} onChange={(e)=>setnum(e.target.value)}/></h1>
<h1>Enter City <input type="text" value={city} onChange={(e)=>setcity(e.target.value)}/></h1>

<h1>My multi {Mymul}</h1>
</>
)
}
export default App
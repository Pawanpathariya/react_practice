import { useEffect,useState } from "react"
const App=()=>{
    const [cnt,setcnt]=useState(0);
    const [mult,setmult]=useState(0);
useEffect(()=>{
 setmult(cnt*2)
},[cnt])

    return(
        <>
        <h1>My count {cnt}</h1>
        <h1>My multi {mult}</h1>

    <button onClick={()=>setcnt(cnt+1)}>Click Here</button>
        </>
    )
}
export default App
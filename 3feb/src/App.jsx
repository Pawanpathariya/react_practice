import { useEffect,useState } from "react"
const App=()=>{
    const [cnt,setcnt]=useState(0);
useEffect(()=>{
    setTimeout(()=>{
        setcnt(cnt+1);
    },2000)
 
})

    return(
        <>
        <h1>My count {cnt}</h1>
        </>
    )
}
export default App
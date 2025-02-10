import { useReducer } from "react"
const App=()=>{
    const reducer=(state,action)=>{
        switch(action){
            case "increment":
                return state+1
            case "decrement":
                return state<=0?0:state-1
            default:
                return state
        }
    }

const colorChange=(state,action)=>{
    switch(action){
        case "red":
            return "red"
        case "green":
            return "green"
        case "yellow":
            return "yellow"
        case "blue":
            return "blue"
        default:
            return state
    }
}

const [count,dispatch]=useReducer(reducer,0)
const [mycolor,discolor]=useReducer(colorChange,"pink")
   

    return (
    <>
    <button onClick={()=>dispatch("increment")}>Increment</button>
    <h1>My Count :{count}</h1>
    <button onClick={()=>dispatch("decrement")}>Decrement</button>


    <div style={{width:"300px",height:"200px",backgroundColor:mycolor,color:"white",borderRadius:"20px",marginTop:"20px",marginBottom:"20px"}}>

    </div>
    <div style={{display:"flex",gap:"30px"}}>
    <button style={{backgroundColor:"red",color:"white",borderRadius:"10px",padding:"10px"}} onClick={()=>discolor("red")}>red</button> 
    <button style={{backgroundColor:"green",color:"white",borderRadius:"10px",padding:"10px"}} onClick={()=>discolor("green")}>Green</button>
    <button style={{backgroundColor:"yellow",color:"black",borderRadius:"10px",padding:"10px"}} onClick={()=>discolor("yellow")}>Yellow</button>
    <button style={{backgroundColor:"blue",color:"white",borderRadius:"10px",padding:"10px"}} onClick={()=>discolor("blue")}>Blue</button>
    </div>
    </>
    )
}

export default App
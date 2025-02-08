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


    <div style={{width:"200px",height:"200px",backgroundColor:mycolor,color:"white",borderRadius:"20px",marginTop:"20px",marginBottom:"20px"}}>

    </div>
    <button onClick={()=>discolor("red")}>red</button> 
    <button onClick={()=>discolor("green")}>Green</button>
    <button onClick={()=>discolor("yellow")}>Yellow</button>
    <button onClick={()=>discolor("blue")}>Blue</button>
    </>
    )
}

export default App
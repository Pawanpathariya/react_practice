import { useRef } from "react"
const App=()=>{
  const myref=useRef("");


  const handleClick=()=>{
    myref.current.style.fontSize="30px";
   
  }

  const handleClick2=()=>{
    myref.current.style.color="red";
    myref.current.style.backgroundColor="yellow";
    myref.current.style.border="2px solid black";

  }
  const handleClick3=()=>{
    myref.current.style.fontSize="10px";
    myref.current.style.borderRadius="200px"
    myref.current.style.height="200px"
    myref.current.style.textAlign="center"
   myref.current.style.padding="10%";
  }
  return (
    <>
          <button onClick={handleClick}>Click</button>  
          <button onClick={handleClick2}>Click</button>   
          <button onClick={handleClick3}>Click</button>
      <div ref={myref}>
        <h1>Welcome to Cybrom </h1>
      </div> <br /> <br />

    </>
  )
}

export default App
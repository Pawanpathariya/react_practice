import { useRef } from "react"
const App=()=>{
  const myref=useRef("");


  const handleClick=()=>{
    myref.current.style.color="red";
    myref.current.style.backgroundColor="yellow";
    myref.current.style.padding="20px";
    myref.current.style.textAlign="center";
  }
  return (
    <>
      <h1>hello</h1>

      <div ref={myref}>
        <h1>My Ref Hook</h1>
      </div> <br /> <br />
      <button onClick={handleClick}>Click</button>  
    </>
  )
}

export default App
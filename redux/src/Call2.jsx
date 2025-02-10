import { memo } from "react";
const Call2 = ({task,addtask}) => {
    console.log("*************");
    return (
        <>
          {
            task.map((key)=>{
                return(
                    <>
     <h3>{key}</h3>
                    </>
                )
            })
          }
          <button onClick={addtask}>Add</button> 
        </>
    );
};

export default memo(Call2);
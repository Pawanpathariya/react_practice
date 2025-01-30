const Student=(props)=>{
    return(
             <>
     <h1>Student Name : {props.name}</h1>  
     <h1>Roll no : {props.rno} </h1>  
     <h1>Subject : {props.sub} </h1>
     <h2>Total Fees : {props.tfs} </h2>   
            </>
    )
}

export default Student
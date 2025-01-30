// import Student from "./student"
// const name="Pawan";
// const rno=121;
// const stucls="B.Tech";
// const fees=50000;
// const App=()=>{
//   return(
//     <>
//       <h1>Welcome!!</h1>
//       <Student name={name} rno={rno} sub={stucls} tfs={fees} />
//     </>
//   )
// }

// export default App

// const Data=[
//   {
//  "rollno":1,
//  "name":"Pawan",
//  "subject":"B.Tech",
//  "fees":50000
//   },
//   {
//  "rollno":2,
//  "name":"Rohit",
//  "subject":"BCA",
//  "fees":30000
//   },
//   {
//  "rollno":3,
//  "name":"Rahul",
//  "subject":"BCOM",
//  "fees":40000
//   },
//   {
//  "rollno":4,
//  "name":"Raj",
//  "subject":"BBA",
//  "fees":30000
//   },
//   {
//     "rollno":5,
//     "name":"Ravi",
//     "subject":"B.Tech",
//     "fees":50000
//   }
// ]

// const ans=Data.map((item) => (
//   <>
// <tr>
//   <td style={{padding:10}}>{item.rollno} </td>  
//   <td style={{padding:10}}>{item.name}</td>  
//   <td style={{padding:10}}>{item.subject} </td>
//   <td style={{padding:10}}>{item.fees} </td>
// </tr>
//    </>

// ));

// const App=()=>{
//   return(
//     <>
//       <h1>Hello</h1>
// <table border='2' style={{textAlign:"center"}}>
//   <tr>
//     <th style={{padding:10}}>Roll no</th>
//     <th style={{padding:10}}>Student Name</th>
//     <th style={{padding:10}}>Subject</th>
//     <th style={{padding:10}}>Total Fees</th>
//   </tr>
//   {ans}
// </table>
  
//     </>
//   )
// }
// export default App;

// import Data from "./EmpData"
// import Design from "./Design"

// const ans=Data.map((item) => (
//   <Design rollno={item.rollno}
//    name={item.name}
//     subject={item.subject}
//      fees={item.fees} />
// ));
// const App=()=>{
//   return(
//     <>
//       <h1>Hello</h1>
//       <center>
//       <table border='2' width='700' style={{textAlign:"center"}}>
//         <tr bgcolor="yellow">
//           <th>Roll no</th>
//           <th>Student Name</th>
//           <th>Subject</th>
//           <th>Total Fees</th>
//         </tr>
//       {ans}
//       </table>
//       </center>
//     </>
//   )
// }

// export default App







const App=()=>{
  return(
    <>
     <div style={{textAlign:"center",width:"400px",backgroundColor:"yellowgreen",height:"250px",position:"relative",borderRadius:"20px"}}>
  <div style={{position:"relative" ,top:"30%" ,border:"2px solid black",padding:"10px",borderRadius:"20px",backgroundColor:"green",width:"70%",left:"12%"}}>
    <h1 style={{color:"white"}}>Cybrom</h1>
  </div>
     </div>
  </>
  )
} 









export default App
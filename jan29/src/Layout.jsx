import { Link,Outlet } from "react-router-dom"
const Layout=()=>{
    return(
        <>
       <nav style={{ backgroundColor: '#6495ED',height:'60px' }}>
  <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', gap: '10px',display:'flex',justifyContent:'space-evenly',width:'100%' }}>
    <li ><Link to='/home' style={{color:'white',textDecoration:'none',fontSize:'30px'}}>Home |</Link></li>
    <li><Link to='/about'style={{color:'white',textDecoration:'none',fontSize:'30px'}} >About |</Link></li>
    <li><Link to='/contact' style={{color:'white',textDecoration:'none',fontSize:'30px'}}>Contact Us |</Link></li>
  </ul>
</nav>

       <hr size='5' color="red"/> 
        <Outlet/>
        
        <hr size='5' color="red"/>
        <footer style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px',backgroundColor:'#6495ED',color:'white',height:'60px'}}>
            <h4>Copyright &copy; {new Date().getFullYear()}</h4>
            <h4 style={{marginLeft:'10px'}}>All Rights Reserved Pawan Pathariya</h4>
        </footer>
        </>
    )
    }   


export default Layout
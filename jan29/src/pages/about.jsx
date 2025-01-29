import { Link,Outlet } from "react-router-dom"
const About=()=>{
    return(
        <>
        <h1>About Page</h1>
        <ul>
            <li><Link to='company'>About Company</Link></li>
            <li><Link to='service'>About Company Services</Link></li>
            <li><Link to='employee'>About Company Employee</Link></li>
        </ul>

        <hr />
        <Outlet/>

        </>
    )
    }
    
    export default About
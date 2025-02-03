import { Link,Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Topbar = () => {
return(
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={"home"}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"product"}>Product</Nav.Link>
            <Nav.Link as={Link} to={"contact"}>Contact</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
)

}

export default Topbar
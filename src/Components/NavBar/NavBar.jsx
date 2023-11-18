import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carrito from '../Carrito/Carrito'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar variant="light" expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>Ardidas</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">YouPhone</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Charger</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Phone Case</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Headphones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Accesories</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Carrito />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

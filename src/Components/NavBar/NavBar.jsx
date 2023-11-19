import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carrito from "../Carrito/Carrito";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const NavBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Navbar variant="light" expand="lg" className="bg-warning">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img style={{width: "5rem"}} src="../../../public/img/logo.png"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">YouPhone</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories.map((category, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link
                      to={`/category/${category}`}
                      style={{ textDecoration: "none", color: "Black" }}
                    >
                      {category}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
          <Carrito />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

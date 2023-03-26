import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavMenu = () => {
  return (
    <>
      <Navbar className="shadow-sm mb-4" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">CRUD Redux</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="text-decoration-none text-dark p-3" to="/">Read List</NavLink>
            <NavLink className="text-decoration-none text-dark p-3" to="/create">Created Product</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavMenu;

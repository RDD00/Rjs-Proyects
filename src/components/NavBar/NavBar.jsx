import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CardWidget } from '../CardWidget/CardWidget'
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Tienda de Ropa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to="/">Inicio</NavLink>
            <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to='/category/pantalones'>
                            Pantalones
            </NavLink>
            <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to='/category/zapatillas'>
                            Zapatillas
            </NavLink>
          </Nav>

          <Nav>
            <CardWidget />
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar

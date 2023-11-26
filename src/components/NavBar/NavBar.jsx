import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CardWidget } from '../CardWidget/CardWidget'
import { Link, NavLink } from 'react-router-dom';

const categories = [
  {id: '1', name: 'Pantalones', category: 'pantalones',},
  {id: '2', name: 'Zapatillas', category: 'zapatillas',}
]

function NavBar() {
    return (
        
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Tienda de Ropa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to="/">Inicio</NavLink>
            {/* <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to='/category/pantalones'>
                            Pantalones
            </NavLink>
            <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to='/category/zapatillas'>
                            Zapatillas
            </NavLink> */}
            {categories.map(category => 
                <NavLink  key={category.id} 
                          className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} 
                          to={`/category/${category.category}`}>

                  {category.name}
                  
                </NavLink>)}
          </Nav>

          <Nav>
            
            <Link to='/cart'>
              <CardWidget/>
            </Link>
              
            
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar

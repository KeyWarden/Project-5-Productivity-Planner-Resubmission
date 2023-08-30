import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar className='NavBar-bg' expand="sm">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto NavBar-text">
              <NavLink exact to="/">Home</NavLink>
              <NavLink to="/tasks">Tasks</NavLink>
              <NavLink to="/groups">Groups</NavLink>
              <NavLink to="/signin">Sign-In</NavLink>
              <NavLink to="/signup">Sign-Up</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
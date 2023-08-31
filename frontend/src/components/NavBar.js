import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../App';

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext)
  const loggedInLinks = <>{currentUser?.username}</>
  const loggedOutLinks = (
    <>
      <NavLink to="/signin">Sign-In</NavLink>
      <NavLink to="/signup">Sign-Up</NavLink>
    </>
  )

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
              {currentUser ? loggedInLinks : loggedOutLinks}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
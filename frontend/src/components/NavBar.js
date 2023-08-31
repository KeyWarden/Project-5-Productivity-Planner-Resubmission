import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import axios from 'axios';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post('dj-rest-auth/logout/');
      setCurrentUser(null);
    } catch (err) {
      console.log(err)      
    }
  };

  const loggedInLinks = (
    <>
      <NavLink to="/tasks">Tasks</NavLink>
      <NavLink to="/groups">Groups</NavLink>
      <NavLink
       to="/"
       onClick={handleSignOut}
      >
        Sign-Out
      </NavLink>
      {currentUser?.username}
    </>
  )
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
              {currentUser ? loggedInLinks : loggedOutLinks}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
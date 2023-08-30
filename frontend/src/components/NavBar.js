import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <Navbar className='NavBar-bg' expand="sm">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Tasks</Nav.Link>
              <Nav.Link>Groups</Nav.Link>
              <Nav.Link>Sign-In</Nav.Link>
              <Nav.Link>Sign-Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
import React from 'react'
import {
    Navbar, Nav, NavDropdown
  } from 'react-bootstrap';
  import logo from './img/LOGO.png';
function Header()
{
    return(
        <Navbar className="color-nav" expand="lg" variant="dark" fixed="top">
  <Navbar.Brand href="/" class="logo"><img src={logo} width="80px" /></Navbar.Brand>
  <div className="logo mr-auto d-none d-md-block" id="name"><h2>Web and Design</h2></div>
            <div className="logo mr-auto d-md-none" id="name"><h6>Web and Design</h6></div>
  <Navbar.Toggle />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto" id="links">
      <Nav.Link href="/" id="navitems">HOME</Nav.Link>
      <Nav.Link href="/Events" id="navitems">EVENTS</Nav.Link>
      <Nav.Link href="/Showcase"id="navitems">SHOWCASE</Nav.Link>
      <Nav.Link href="https://socdashboard.herokuapp.com/auth/google"> <button class='register'>
             
              
              <span class="button-text"><a href="https://socdashboard.herokuapp.com/admin/dashboard">REGISTER FOR WORKSHOP</a></span>
           
            </button></Nav.Link>
  </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )
}
export default Header;

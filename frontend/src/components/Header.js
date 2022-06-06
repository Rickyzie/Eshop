import React from "react";
import circle from "../picture/circle.jpg"
import {Navbar , Nav , Container ,NavLink ,Image } from "react-bootstrap"

function Header() {
    return (
      <header>
        <Navbar bg="primary" variant="dark"  expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/" style={{ fontSize : '30px', color:"white"}} src={circle}><Image style={{ width :'50px' }} roundedCircle={true} src={circle} />小鮮肉海鮮肉品專賣</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink href="/" style={{ fontSize : '20px', color:"white" }}><i className="fa-solid fa-house"></i>首頁</NavLink>
              <NavLink href="/Cart" style={{ fontSize : '20px', color:"white" }}><i className="fas fa-shopping-cart"></i>購物商店</NavLink>
              <NavLink href="/login" style={{ fontSize : '20px', color:"white" }}><i className="fas fa-user"></i>會員中心</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
  
  export default Header;
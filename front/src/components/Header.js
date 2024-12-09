import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Button } from 'reactstrap';

import logo from '../img/logo.png'
import Login from './Login';
import Signup from './Signup';
import user from "../store/user";
import role from "../store/role";
import cart from "../store/cart";
import { Link } from "react-router-dom";
// import Signup from './signup';

const Header =()=> {
    const handleClickExit = () => user.delAuth();
  
   

        return (
            <>
            <div style={{ fontFamily: " Cormorant Infant, serif", background:"#E8E3E0", marginBottom:"2%" }}>
                <Navbar  >
                    <Container>
                        <Navbar.Brand>
                        <a  href="/">
                            <img
                                src={logo}
                                height="90"
                                width="130"
                                className="d-inLine-block align-top"
                                alt="Logo"
                             
                            />
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav >
                                <Nav.Link  style={{color:"#EA5675", fontSize:"23px"}} href="/">Главная</Nav.Link>
                                <Nav.Link  style={{color:"#EA5675", fontSize:"23px"}}  href="/catalog">Каталог</Nav.Link>
                                <Nav.Link  style={{color:"#EA5675", fontSize:"23px"}}  href="/info">О нас</Nav.Link>
                                <Nav.Link  style={{color:"#EA5675", fontSize:"23px"}}  href="/where">Где нас найти?</Nav.Link>
                            
                             
                            </Nav> 
                            </Navbar.Collapse>  <div style={{float: "right"}}> 
                            {!user.auth ? (
               < div style={{ textAlign:"center" }}><div  style={{textAlign: "center"}}><Login/></div>
               <Signup/></div> 
              ) : (
                <>
              {!role.isAdmin &&
        <Link
          style={{ textDecoration: "none", whiteSpace: "nowrap" }}
          to="/cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="white"
            className="bi bi-cart2 mt-2"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          <span className="cart_count">{cart.length}</span>
        </Link>}
                  {role.isAdmin ? (
                    <Link to="/admin" className="ms-4"  >
                      <Button style={{  fontSize: "20px", textAlign:"center" ,  
                    borderRadius:"30px", background:"#FE9BAD",  borderColor:" #FE9BAD"}}>Админ панель</Button>
                    </Link>
                  ) : (
                    <Link to="/personal" className="ms-4">
                      <Button style={{ fontSize: "20px", textAlign:"center" ,  
                    borderRadius:"30px", background:"#FE9BAD",  borderColor:" #FE9BAD"}}>Личный кабинет</Button>
                    </Link>
                  )}
                  <>
                             <Button
                 color="lspd"
        className="ms-4"
        onClick={handleClickExit}
      >
        <Link to='/'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="white"
          className="bi bi-box-arrow-left"
          viewBox="0 0 16 16"
        >
          <path d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
          <path d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
        </svg>
        </Link>
      </Button></>
                </>
              )}
                            
                        
                            </div>
                       

                    </Container>
                </Navbar>
</div>

              

            </>

        );
    
}

export default Header

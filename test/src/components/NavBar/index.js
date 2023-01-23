import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { Swipeable } from 'react-swipeable';
import styled from 'styled-components'
import Home from './Home';
import About from './About';
import Services from './Services';
import Skils from './Skils';
import Contact from './Contact';

const Nav = styled.nav`
  background-color: #0C024A;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  
`

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 1500px;
`

const NavLogo = styled(Link)`
  align-items: center;
  margin-left: 30px;
  margin-top: 5px;
  flex-grow: 1;
`

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  margin-right: 2rem;
  @media (max-width:700px){
    height:90vh;
    background: black;
    flex-direction:column;
    margin-top: 0rem;
    margin-right: 0rem;
    margin-bottom: 0rem;
  }
`

const NavItem = styled.li`
margin-right: 20px;
@media (max-width:700px){
  text-transform: uppercase;
  margin-top: 55px;
  
}
  
`

const NavLinkStyled = styled(Link)`
  color: White;
  font-size: 24px;
  text-decoration: none;
  padding: 0px 15px;
  height: 100%;
  @media (max-width:700px){
    font-size: 28px;
    &:hover {
      letter-spacing: 2.5px;
    
  transition: all .5s ease;
      color:red;
    }
    }
  
`

const NavIcon = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right:30px;
  border-radius:2px;
  &:hover {
    cursor:pointer;
  }
`


function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false); // added state variable
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const handleMenuClick = () => { 
    setShowMenu(!showMenu);
  };

  return (
    <BrowserRouter>
    <Swipeable>
    <Nav>
    <NavContainer>
    <NavLogo>
    <img src={logo} alt="Logo" />
    </NavLogo>
    {width > 700 ? (
    <NavMenu>
    <NavItem>
    <NavLinkStyled
                     exact
                    


to="/"
                   >
                    Home
    </NavLinkStyled>
    </NavItem>
    <NavItem>
<NavLinkStyled
                 exact
                 to="/about"
               >
About
</NavLinkStyled>
</NavItem>
<NavItem>
<NavLinkStyled
                 exact
                 to="/services"
               >
Services
</NavLinkStyled>
</NavItem>
<NavItem>
<NavLinkStyled
                 exact
                 to="/skils"
               >
Skils
</NavLinkStyled>
</NavItem>
<NavItem>
<NavLinkStyled
                 exact
                 to="/contact"
               >
Contact
</NavLinkStyled>
</NavItem>
</NavMenu>
) : (
<NavIcon onClick={handleMenuClick }>
{showMenu ? <CgClose size="24"/> : <GiHamburgerMenu size="24"/>}
</NavIcon>
)}
</NavContainer>
</Nav>
<Switch>
<Route path="/" component={Home} exact />
<Route path="/about" component={About} exact />
<Route path="/services" component={Services} exact />
<Route path="/Skils" component={Skils} exact />
<Route path="/contact" component={Contact} exact />
</Switch>
{showMenu && (
<div>
<NavMenu>
<NavItem>
<NavLinkStyled
                 exact
                 to="/"
                 onClick={handleMenuClick}
               >
Home
</NavLinkStyled>
</NavItem>
<NavItem>
<NavLinkStyled
                 exact
                 to="/about"
                 onClick={handleMenuClick}
               >
About
</NavLinkStyled>
</NavItem>
<NavItem>
<NavLinkStyled
                 exact
                 to="/services"
                 onClick={handleMenuClick}
               >
Services
</NavLinkStyled>
</NavItem>
<NavItem>
<NavLinkStyled
                 exact
                 to="/skils"
                 onClick={handleMenuClick}
               >
Skils
</NavLinkStyled>
</NavItem>
<NavItem>
<NavLinkStyled
                 exact
                 to="/contact"
                 onClick={handleMenuClick}
               >
Contact
</NavLinkStyled>
</NavItem>
</NavMenu>
</div>
)}
</Swipeable>
</BrowserRouter>
);
}

export default NavBar;
import React, {useEffect, useState}  from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink
 } from './NavbarElements'
 import Logo from '../../images/logo.png'




 
const Navbar = ({toggle}) => {

     const[scrollNav, setScrollNav] = useState(false)

     const changeNav = () => {
         if(window.screenY >= 90) {
             setScrollNav(true)
         } else {
             setScrollNav(false)
         }
     } 

     useEffect(() => {
         window.addEventListener('scroll', changeNav);
     })

    return (
        <>
        <Nav scrollNav={scrollNav}>
              <NavLink to="/">
                  <img src={Logo} alt="logo..."/>
              </NavLink>
              <Bars onClick={toggle}/>
            <NavMenu>
                <NavLink to="graphics" activeStyle
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                    Graphics
                </NavLink>
                <NavLink to="3d-design" activeStyle
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                    3D- Design
                </NavLink>
                <NavLink to="videos" activeStyle
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                    Video Editing
                </NavLink>
            </NavMenu>  
            <NavBtn>
            <NavBtnLink to="/Darchton">Darchton</NavBtnLink>
            </NavBtn>
            </Nav>  
        </>
    )
}

export default Navbar

import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {FaBars} from 'react-icons/fa'


export const Nav = styled.nav`
background: #000;
height: 100px;
display:flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index: 10;
-webkit-box-shadow: 0 10px 6px -6px #777;
     -moz-box-shadow: 0 10px 6px -6px #777;
          box-shadow: 0 10px 6px -6px #777;
`
export const NavLink = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    color: #15cdfc;
}

&:hover {
    color: skyblue;
}
`

export const Bars = styled(FaBars)`
display: none;
color: #fff;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    justify-content: center;
    top: 1;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
}
`
export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 768px) {
    display: none;
}
`
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin: 24px;

@media screen and (max-width: 768px){
    display: none;
}
`
export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #F92524;
padding: 10px 22px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`


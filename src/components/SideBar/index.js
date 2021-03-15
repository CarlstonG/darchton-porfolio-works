import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SideBarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon/>
           </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="graphics" onClick={toggle}>Graphics</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>3D - Design</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Video Editing</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute>
                        <SidebarRoute 
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href='https://darchtonservice.com/';
                          }}
                        >Darchton</SidebarRoute>
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>

       </SidebarContainer>
    )
}

export default Sidebar
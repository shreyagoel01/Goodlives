import React from 'react'
import {SidebarContainer,CloseIcon,Icon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements'
const Sidebar = ({ isOpen, toggle}) => {
    return (
     <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle}>
             <CloseIcon />
             </Icon>
             <SidebarWrapper>
                 <SidebarMenu>
                   <SidebarLink to="about" onClick={toggle}>
                       About
                       </SidebarLink>
                       <SidebarLink to="services" onClick={toggle}>
                       Our Services
                       </SidebarLink>
                       <SidebarLink to="experts" onClick={toggle}>
                       Experts
                       </SidebarLink>
                       <SidebarLink to="team" onClick={toggle}>
                       Team
                       </SidebarLink>
                 </SidebarMenu>
                 <SideBtnWrap>
                     <SidebarRoute to="/giftnow">Gift Now</SidebarRoute>
                     </SideBtnWrap>
             </SidebarWrapper>
         </SidebarContainer>
    )
}

export default Sidebar

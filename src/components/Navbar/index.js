import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon,NavItem,NavMenu,NavLinks,NavBtn,NavBtnLink } from './NavbarElements';
import {Logo} from '../../Images'
import { animateScroll as scroll} from 'react-scroll'
export const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () =>
    {
        if(window.scrollY >=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    };
    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome =() => {
        scroll.scrollToTop();
    };
    return (
     <>
     <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}><img src={Logo} /></NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Our Services</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks to="experts" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Experts</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks to="team" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Team</NavLinks>
                    </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/giftnow">Gift Now</NavBtnLink>
                        </NavBtn>
    </NavbarContainer>
     </Nav>
     </>
    );
};
export default Navbar;

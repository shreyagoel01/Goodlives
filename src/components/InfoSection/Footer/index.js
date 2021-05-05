import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLinksWrapper, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="experts">Experts</FooterLink>
                                <FooterLink to="about">Therapies</FooterLink>
                                <FooterLink to="servicesmore">Areas of Expertise</FooterLink>
                                <FooterLink to="/blogs">Blogs</FooterLink>
                                <FooterLink to="/testimonials">Testimonials</FooterLink>
                                <FooterLink to="team">Team</FooterLink>
                                
                            </FooterLinkItems>
                            <FooterLinkItems>
                            <FooterLinkTitle>Self-Tests</FooterLinkTitle>
                                <FooterLink to="/stress">Stress-o-meter</FooterLink>
                                <FooterLink to="/anxiety">Anxiety</FooterLink>
                                <FooterLink to="/emotional">Emotional Intelligence</FooterLink>
                                <FooterLink to="/superpower">Superpower</FooterLink>
                                
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Mental Health</FooterLinkTitle>
                                <FooterLink to="/depression">Depression</FooterLink>
                                <FooterLink to="/anxietycauses">Anxiety</FooterLink>
                                <FooterLink to="servicesmore">Couple counseling</FooterLink>
                                <FooterLink to="/lgbtqia">LGBTQIA+</FooterLink>
                                
                            </FooterLinkItems>
                            <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/chat">Chat on Whatsapp</FooterLink>
                                <FooterLink to="/appointment">Fix an appointment</FooterLink>
                                <FooterLink to="/joinus">Join Us</FooterLink>
                                <FooterLink to="/facebook">Facebook</FooterLink>
                                <FooterLink to="/instagram">Instagram</FooterLink>
                                <FooterLink to="/twitter">Twitter</FooterLink>
                                
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'>
                                GoodLives
                                </SocialLogo>
                                <WebsiteRights>Good Lives @ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                                <SocialIcons>
                                    <SocialIconLink href="//www.facebook.com/goodlives.in/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                                    <SocialIconLink href="//www.instagram.com/goodlives.insta/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                                    <SocialIconLink href="//twitter.com/GoodLives4" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                                    </SocialIcons>
                        </SocialMediaWrap>
                        </SocialMedia>
                    </FooterWrap>
            </FooterContainer>
    )
}

export default Footer

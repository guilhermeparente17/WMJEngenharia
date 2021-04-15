import React from 'react'
import { FaBars} from 'react-icons/fa'
import {
    Nav,
    NavContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    NavImage,
    MobileIcon
} from './NavbarElements'

const index = ({toggle}) => {
    return (
        <section  id="inicio">
            <Nav>
                <NavContainer>
                    <NavLogo to="inicio" smooth={true} duration={700}><NavImage src="https://i.ibb.co/0DXg0CV/logo1.png"></NavImage></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="sobre" smooth={true} duration={700}>Sobre</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="oque" smooth={true} duration={700}>O que e?</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="obras" smooth={true} duration={700}>Obras</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="inversores" smooth={true} duration={700}>Inversores</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/" smooth={true} duration={700}>Financiamentos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Contato</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </section>
    )
}

export default index

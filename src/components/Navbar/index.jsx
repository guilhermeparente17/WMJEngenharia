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
        <div>
            <Nav>
                <NavContainer>
                    <NavLogo to="/"><NavImage src="https://i.ibb.co/0DXg0CV/logo1.png"></NavImage></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks>Sobre</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>O que e?</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Obras</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Inversores</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Financiamentos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Contato</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </div>
    )
}

export default index

import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute
 } from './SidebarElements'

const Sidebar = ({isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="sobre" smooth={true} duration={700} onClick={toggle}>Sobre</SidebarLink>
                    <SidebarLink to="oque" smooth={true} duration={700} onClick={toggle}>O que é ?</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Obras</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Inversores</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Financiamentos</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Contato</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Entre em Contato</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
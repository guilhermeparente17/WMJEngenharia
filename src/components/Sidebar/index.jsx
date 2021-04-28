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
                    <SidebarLink to="obras" smooth={true} duration={700} onClick={toggle}>Obras</SidebarLink>
                    <SidebarLink to="inversores" smooth={true} duration={700} onClick={toggle}>Inversores</SidebarLink>
                    <SidebarLink to="/" smooth={true} duration={700} onClick={toggle}>Financiamentos</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href="https://api.whatsapp.com/send?phone=5585992235391" target="_blank">Entre em Contato</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
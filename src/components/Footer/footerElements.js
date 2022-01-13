import styled from 'styled-components'
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer = styled.div`
    margin-top: 100px;
    width: 100%;
    height:280px;
    background: #005900;
    padding: 50px 0;

    @media screen and (max-width: 980px){
        height: 100%;
    }
`
export const FooterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;

    @media screen and (max-width: 980px){
        flex-direction: column;
    }
`
export const FooterLogo = styled.img`
    width: 130px;
    height: 130px;
    max-width: 1100px;
    display: block;
`
export const FooterList = styled.ul`
    margin-left: 250px;
    list-style:none;

    @media screen and (max-width: 980px){
        margin-left: 0;
        padding: 20px 0;
        margin-top: 10px;
        text-align:center;
    }
`
export const FooterTitle = styled.h3`
    margin-bottom: 30px;
    font-family: 'Noto Sans SC', sans-serif;
    color: #fff;
`
export const FooterLi = styled.li`
    font-family: "Cambria", sans-serif;
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: 20px;
    font-size: 20px;

    @media screen and (max-width: 980px){
        justify-content:center;
    }

    
`
export const FooterLink = styled.a`
    text-decoration:none;
    color: #fff;
    margin-left: 5px;

    
    &:hover{
        text-decoration:underline;
    }
`
export const FooterIcon1 = styled(FaInstagram)`
    width: 20px;
    height:20px;
    color: white;
`
export const FooterIcon2 = styled(FaWhatsapp)`
    width: 20px;
    height:20px;
    color: white;
`
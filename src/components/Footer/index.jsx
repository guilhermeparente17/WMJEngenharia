import React from 'react'
import {
    Footer,
    FooterDiv,
    FooterLogo,
    FooterList,
    FooterTitle,
    FooterLi,
    FooterLink,
    FooterIcon1,
    FooterIcon2
} from './footerElements'
import Imagem from "../../images/logo1.png"

const index = () => {
    return (
        <div>
            <Footer>
                <FooterDiv>
                    <FooterLogo src={Imagem} />
                    <FooterList>
                        <FooterTitle>Redes Sociais</FooterTitle>
                        <FooterLi>
                            <FooterIcon1 />
                            <FooterLink href="https://www.instagram.com/wmjengenharia/" target="_blank">@wmjengenharia</FooterLink>
                        </FooterLi>
                        <FooterLi>
                            <FooterIcon2 />
                            <FooterLink href="https://api.whatsapp.com/send?phone=5585992235391" target="_blank">5585992235391</FooterLink>
                        </FooterLi>
                    </FooterList>

                    <FooterList>
                        <FooterTitle>Localização</FooterTitle>
                        <FooterLi>
                            <FooterLink 
                            href="https://www.google.com/search?q=torre+quixADA+FORTALEZA&
                            oq=torre+quixADA+FORTALEZA&aqs=chrome..69i57.5960j0j4
                            &sourceid=chrome&ie=UTF-8" 
                            target="_blank">Av. Barão de Studart, 2360 <br/>- Joaquim Távora (Fortaleza), Fortaleza - CE,<br/> 60120-002</FooterLink>
                        </FooterLi>
                        <FooterLi>
                            <FooterLink href="/" target="_blank">wmjengenharia@gmail.com</FooterLink>
                        </FooterLi>
                    </FooterList>
                </FooterDiv>
            </Footer>
        </div>
    )
}

export default index

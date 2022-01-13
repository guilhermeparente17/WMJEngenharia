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
                            <FooterLink href="https://www.instagram.com/wmjengenharia/" target="_blank">wmjengenharia</FooterLink>
                        </FooterLi>
                        <FooterLi>
                            <FooterIcon2 />
                            <FooterLink href="https://api.whatsapp.com/send?phone=555585992235391
                            &text=Ol%C3%A1%2C%20gostaria%20de%20saber
                            %20mais%20sobre%20seus%20servi%C3%A7os." target="_blank">85 9.9223-5391</FooterLink>
                        </FooterLi>
                    </FooterList>

                    <FooterList>
                        <FooterTitle>Localização</FooterTitle>
                        <FooterLi>
                            <FooterLink 
                            href="https://www.google.com/search?q=Av.+Vereador+Pedro+paulo%2C+1460+fortaleza&oq=Av.
                            +Vereador+Pedro+paulo%2C+1460+fortaleza&aqs=chrome..69i57.
                            3749j0j1&sourceid=chrome&ie=UTF-8" 
                            target="_blank">Av. Vereador Pedro paulo, 1460 -<br/> Parque Manibura, Fortaleza - CE,<br/> 60821-716
                            </FooterLink>
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

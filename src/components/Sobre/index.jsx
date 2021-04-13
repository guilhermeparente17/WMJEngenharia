import React from 'react'
import { 
    Sobre,
    SobreCard,
    SobreContainer,
    SobreH2,
    SobreP,
    SobreImg    
} from '../Sobre/SobreElements'
import Imagem from '../../images/foto1.jpg'

const index = () => {
    return (
        <div>
                <Sobre id="sobre">
                    <SobreCard>
                        <SobreContainer>
                            <SobreH2>Sobre</SobreH2>
                            <SobreP>A WMJ Engenharia atua no mercado de Energia Solar Fotovoltaica 
                                em todo o estado do Ceará, com equipamentos de qualidade, instalações e 
                                projetos realizados por profissionais especializados e acompanhamento junto 
                                à Concessionária. Nossos serviços tem como objetivo levar ao cliente praticidade 
                                para adquirir seu Sistema Solar e economizar em até 95% da conta de energia de sua 
                                residência ou empresa, de forma sustentável.</SobreP>
                        </SobreContainer>
                        <SobreImg  src={Imagem} />
                    </SobreCard>
                    </Sobre>
        </div>
    )
}

export default index

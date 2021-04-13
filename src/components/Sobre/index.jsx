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
import Imagem2 from '../../images/foto2.jpg'

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
                        <SobreImg marginLeft={100}  src={Imagem} />
                    </SobreCard>
                </Sobre>


                <Sobre>
                    <SobreCard>
                        <SobreImg  src={Imagem2} />
                        <SobreContainer id="oque"  marginLeft={100}>
                            <SobreH2>O que é energia fotovoltaica?</SobreH2>
                            <SobreP>A energia solar fotovoltaica é baseada na conversão direta 
                                da luz do sol em energia elétrica, através das células fotovoltaicas. 
                                As células fotovoltaicas são dispostas em vários painéis, variando sua 
                                quantidade conforme a necessidade de produção energética, ligados através 
                                de instalação elétrica à um inversor, equipamento que recebe a energia em 
                                Corrente Contínua (DC) gerada pelo sistema e converte para Corrente Alternada (AC), 
                                do mesmo tipo usado pela rede elétrica convencional e que pode ser usada em sua Casa ou Empresa.
                            </SobreP>
                        </SobreContainer>
                    </SobreCard>
                </Sobre>
        </div>
    )
}

export default index

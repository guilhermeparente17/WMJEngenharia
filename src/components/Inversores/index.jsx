import React from 'react'
import {
    Itens,
    ItensCard,
    ItensImg,
    ItensTitulo,
    ItensH1,
    ItensContainer
} from './itensElements'

import Imagem from '../../images/foto7.jpg'
import Imagem2 from '../../images/foto9.webp'
import Imagem3 from '../../images/foto10.jpg'
import Imagem4 from '../../images/foto11.jpg'

import Marca1 from '../../images/marca1.png'
import Marca2 from '../../images/marca2.png'
import Marca3 from '../../images/marca3.jpg'
import Marca4 from '../../images/marca4.png'


const index = () => {
    return (
        <div >
            <section id="inversores">
                <Itens>
                    <ItensH1>Inversores</ItensH1>
                    <ItensContainer>
                        <ItensCard>
                            <ItensImg width={250} height={250}  src={Imagem} />
                            <ItensTitulo>Growatt</ItensTitulo>
                        </ItensCard>
                        <ItensCard>
                            <ItensImg width={250} height={250} src={Imagem2} />
                            <ItensTitulo>Sungrow</ItensTitulo>
                        </ItensCard>
                        <ItensCard>
                            <ItensImg width={250} height={250} src={Imagem3} />
                            <ItensTitulo>Fronius</ItensTitulo>
                        </ItensCard>
                        <ItensCard>
                            <ItensImg width={250} height={250} src={Imagem4} />
                            <ItensTitulo>Growatt</ItensTitulo>
                        </ItensCard>
                    </ItensContainer>
                </Itens>
            </section>

            <section id="marcas">
            <Itens>
                <ItensH1>Marcas das placas solares</ItensH1>
                <ItensContainer>
                    <ItensCard marginLeft={0}>
                        <ItensImg width={200} height={50}  src={Marca1} />
                    </ItensCard>
                    <ItensCard marginLeft={50}>
                        <ItensImg width={150} height={100} src={Marca2} />
                    </ItensCard>
                    <ItensCard marginLeft={50}>
                        <ItensImg width={150} height={150} src={Marca3} />
                    </ItensCard>
                    <ItensCard marginLeft={50} paddingBottom={20}>
                        <ItensImg width={150} height={50} src={Marca4} />
                    </ItensCard>
                </ItensContainer>
            </Itens>
            </section>
        </div>
    )
}

export default index

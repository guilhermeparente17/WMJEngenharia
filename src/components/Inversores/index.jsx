import React from 'react'
import {
    Inversores,
    InversoresCard,
    InversoresImg,
    InversoresTitulo,
    InversoresH1,
    InversoresContainer
} from './inversoresElements'
import Imagem from '../../images/foto7.jpg'
import Imagem2 from '../../images/foto9.webp'
import Imagem3 from '../../images/foto10.jpg'
import Imagem4 from '../../images/foto11.jpg'

const index = () => {
    return (
        <section id="inversores">
            
            <Inversores>
            <InversoresH1>Inversores</InversoresH1>
                <InversoresContainer>
                    <InversoresCard>
                        <InversoresImg src={Imagem} />
                        <InversoresTitulo>Growatt</InversoresTitulo>
                    </InversoresCard>

                    
                    <InversoresCard>
                        <InversoresImg src={Imagem2} />
                        <InversoresTitulo>Sungrow</InversoresTitulo>
                    </InversoresCard>

                    <InversoresCard>
                        <InversoresImg src={Imagem3} />
                        <InversoresTitulo>Fronius</InversoresTitulo>
                    </InversoresCard>

                    <InversoresCard>
                        <InversoresImg src={Imagem4} />
                        <InversoresTitulo>Growatt</InversoresTitulo>
                    </InversoresCard>

                </InversoresContainer>
            </Inversores>
        </section>
    )
}

export default index

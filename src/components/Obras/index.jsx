import React from 'react'
import {
    Obras,
    ObrasH1,
    ObrasContainer,
    ObrasCard,
    ObrasImg,
    ObrasTitulo,
    ObrasP,
    ObrasContent
} from './ObrasElements'
import Imagem from '../../images/foto3.jpg'
import Imagem2 from '../../images/foto4.jpg'
import Imagem3 from '../../images/foto5.jpg'
import Imagem4 from '../../images/foto6.jpg'
import Imagem5 from '../../images/foto7.PNG'

const index = () => {
    return (
        <div>
            <Obras id="obras">
                <ObrasH1>Obras</ObrasH1>
                <ObrasContainer>
                    <ObrasCard>
                        <ObrasImg src={Imagem} />
                        <ObrasContent>
                            <ObrasTitulo>Dunas,<br />Fortaleza-CE</ObrasTitulo>
                            <ObrasP>Potencia 5,75 kwp</ObrasP>
                        </ObrasContent>
                    </ObrasCard>

                    <ObrasCard>
                        <ObrasImg src={Imagem2} />
                        <ObrasContent>
                            <ObrasTitulo>Dunas,<br />Fortaleza-CE</ObrasTitulo>
                            <ObrasP>Potencia 5,75 kwp</ObrasP>
                        </ObrasContent>
                    </ObrasCard>

                    <ObrasCard>
                        <ObrasImg src={Imagem3} />
                        <ObrasContent>
                            <ObrasTitulo>Dunas,<br />Fortaleza-CE</ObrasTitulo>
                            <ObrasP>Potencia 5,75 kwp</ObrasP>
                        </ObrasContent>
                    </ObrasCard>

                    <ObrasCard>
                        <ObrasImg src={Imagem4} />
                        <ObrasContent>
                            <ObrasTitulo>Dunas,<br />Fortaleza-CE</ObrasTitulo>
                            <ObrasP>Potencia 5,75 kwp</ObrasP>
                        </ObrasContent>
                    </ObrasCard>

                    <ObrasCard>
                        <ObrasImg src={Imagem5} />
                        <ObrasContent>
                            <ObrasTitulo>Dunas,<br />Fortaleza-CE</ObrasTitulo>
                            <ObrasP>Potencia 5,75 kwp</ObrasP>
                        </ObrasContent>
                    </ObrasCard>




                </ObrasContainer>
            </Obras>
        </div>
    )
}

export default index

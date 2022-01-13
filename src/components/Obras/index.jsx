import React from 'react'
import {
    Obras,
    ObrasH1,
    ObrasContainer,
    ObrasCard,
    ObrasImg,
    ObrasTitulo,
    // ObrasP,
    ObrasContent
} from './ObrasElements'

import Obra2 from '../../images/obra2.jpeg'
import Obra3 from '../../images/obra3.jpeg'
import Obra4 from '../../images/obra4.jpeg'
import Obra5 from '../../images/obra5.jpeg'
import Obra6 from '../../images/obra6.jpeg'
import Obra7 from '../../images/obra7.jpeg'
import Obra8 from '../../images/obra8.jpeg'

const index = () => {
    return (
        <div>
            <Obras id="obras">
                <ObrasH1>Obras</ObrasH1>
                <ObrasContainer>
                    <ObrasCard>
                        <ObrasImg src={Obra2} />
                        <ObrasContent>
                            <ObrasTitulo>Alphaville,<br />Fortaleza-CE</ObrasTitulo>
                            {/* <ObrasP>Potencia 5,75 kwp</ObrasP> */}
                        </ObrasContent>
                    </ObrasCard>

                    <ObrasCard>
                        <ObrasImg src={Obra3} />
                        <ObrasContent>
                            <ObrasTitulo>Centro,<br />Sobral-CE</ObrasTitulo>
                            {/* <ObrasP>Potencia 5,75 kwp</ObrasP> */}
                        </ObrasContent>
                    </ObrasCard>

                    <ObrasCard>
                        <ObrasImg src={Obra5} />
                        <ObrasContent>
                            <ObrasTitulo>Obra Assai Atacadista</ObrasTitulo>
                            {/* <ObrasP>Potencia 5,75 kwp</ObrasP> */}
                        </ObrasContent>
                    </ObrasCard>

                    <ObrasCard>
                        <ObrasImg src={Obra7} />
                        <ObrasContent>
                            <ObrasTitulo fontSize={20}>Obra Seminovos Movida</ObrasTitulo>
                            {/* <ObrasP>Potencia 5,75 kwp</ObrasP> */}
                        </ObrasContent>
                    </ObrasCard>

                    <ObrasCard>
                        <ObrasImg src={Obra6} />
                        <ObrasContent>
                            <ObrasTitulo fontSize={20}>Reforma de apartamento privado.</ObrasTitulo>
                            {/* <ObrasP>Potencia 5,75 kwp</ObrasP> */}
                        </ObrasContent>
                    </ObrasCard>

                    <ObrasCard>
                        <ObrasImg src={Obra4} />
                        <ObrasContent>
                            <ObrasTitulo>Energia Solar</ObrasTitulo>
                            {/* <ObrasP>Potencia 5,75 kwp</ObrasP> */}
                        </ObrasContent>
                    </ObrasCard>

                    <ObrasCard>
                        <ObrasImg src={Obra8} />
                        <ObrasContent>
                            <ObrasTitulo>Energia Solar</ObrasTitulo>
                            {/* <ObrasP>Potencia 5,75 kwp</ObrasP> */}
                        </ObrasContent>
                    </ObrasCard>


                </ObrasContainer>
            </Obras>
        </div>
    )
}

export default index

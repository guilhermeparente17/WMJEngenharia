import React from 'react'
import {
    IndexContainer,
    FotoBg,
    Foto,
    IndexContent,
    IndexH1,
    IndexP,
    B,
    IndexBtnWrapper,
    Button
} from './IndexContainerElements'
import Imagem from '../../images/fotoinicial.jpg'

const index = () => {
    return (
        <IndexContainer>
            <FotoBg>
                <Foto src={Imagem}></Foto>
            </FotoBg>
            <IndexContent>
                <IndexH1>WMJ Engenharia</IndexH1>
                <IndexP>
                    Sua casa ou empresa livre da conta de luz.<B> Até 95% de economia!</B> Invista já em energia solar!
                </IndexP>
                <IndexBtnWrapper>
                <Button>
                    Solicite um Orçamento
                </Button>
                </IndexBtnWrapper>
            </IndexContent>
        </IndexContainer>
    )
}

export default index

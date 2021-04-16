import styled from 'styled-components'

export const Itens = styled.div`
    padding-top: 50px;
    color: #121212;
`

export const ItensContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    max-width: 1800px;
    margin: 0 10px;
    padding: 0 80px;
`

export const ItensCard = styled.div`
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: ${props => `${props.marginLeft}px`};
    padding-bottom: ${props => `${props.paddingBottom}px`};

    @media screen and (max-width: 768px){
        margin-left: 0;
        margin-bottom: 0;
    }

`

export const ItensImg = styled.img`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    
`
export const ItensTitulo = styled.h2`
    padding:30px;
    text-align:center;
    font-family: 'Noto Sans SC', sans-serif;
    font-size:17px;
`


export const ItensH1 = styled.h2`
    padding:0 80px;
    margin: 40px 0;
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 30px;
    max-width: 800px;

    @media screen and (max-width: 768px){
        text-align:left;
    }
`



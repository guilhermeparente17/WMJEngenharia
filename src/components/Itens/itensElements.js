import styled from 'styled-components'


export const Itens = styled.div`
    padding-top: 50px;
    color: #121212;
`

export const ItensContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content:center;
    align-items:center;
    max-width: 1800px;
    margin: 0 10px;
    padding: 0 50px;

    @media screen and (max-width: 978px){
        display: flex;
        flex-wrap: wrap;
        
    }
`

export const ItensCard = styled.div`
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: ${props => `${props.marginLeft}px`};
    padding-bottom: ${props => `${props.paddingBottom}px`};
    text-align:center;

    //fazer o props no margin
    margin: 30px ${props => `${props.margin}px`};

    @media screen and (max-width: 768px){
        margin:0px 60px;
        margin-bottom: 30px;
    }

`

export const ItensImg = styled.img`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    
`
export const ItensTitulo = styled.h2`
    padding:10px;
    font-family: 'Noto Sans SC', sans-serif;
    font-size:17px;
    height:50%;
`


export const ItensH1 = styled.h2`
    padding:0 80px;
    margin: 40px 0;
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 30px;
    max-width: 800px;

    @media screen and (max-width: 768px){
        text-align:center;
    }
`

export const Botao = styled.a`
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');

    font-family: 'Oswald', sans-serif;
    font-size: 28px;
    color: #fff;
    background: #008C00;
    padding: 30px 60px;
    border:none;
    border-radius: 55px;
    cursor: pointer;
    outline:none;
    transition: 0.2s ease-in-out;
    margin-top: 40px;
    margin-left: 40%;
    margin-bottom: 100px;
    text-decoration:none;

    &:hover{
        background: #005900;
        transition: 0.4s ease-in-out;
    }

    @media screen and (max-width: 768px){
        font-size: 22;
        text-align: center;
        margin-top: 0;
        padding: 15px 30px;
        margin-left: 15%;
    }
`


export const WrapperBtn = styled.div`
    margin: 100px 0;
    height: 50px;
    width: 100%;
    
`



import styled from 'styled-components'

export const Sobre = styled.section`
    padding: 80px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding-top: 100px;

    @media screen and (max-width: 768px){
        padding: 30px;
    }
    
`

export const SobreCard = styled.div`
    display: flex;



    @media screen and (max-width: 1008px){
        flex-wrap: wrap;
    }
`

export const SobreContainer = styled.section`
    width:600px;
    margin-left: ${props => `${props.marginLeft}px`};
    

    @media screen and (max-width: 768px){
        width: 100%;
        margin-top:60px;
        margin-left: 0;
    }

    @media screen and (max-width: 978px){
        width: 100%;
    }
`

export const SobreH2 = styled.h2`
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    color: #121212;
    margin-bottom: 15px;

    @media screen and (max-width: 978px){
        text-align:center;
        margin-bottom: 25px;
    }
`

export const SobreP = styled.p`
    font-family: 'Noto Sans JP', sans-serif;
    font-size:19px;
    color: #121212;

    @media screen and (max-width: 768px){
        font-size: 17px;
    }

    @media screen and (max-width: 978px){
        font-size: 17px;
        
    }
`

export const SobreImg = styled.img`
    width:600px;
    height:300px;
    border-radius: 15px;
    margin-left: ${props => `${props.marginLeft}px`};
    max-width: 100%;
    display: block;
    
    @media screen and (max-width: 768px){
        margin-left: 0;
        margin-top: 20px;
        height:250px;
    }
    @media screen and (max-width: 978px){
        margin-left: 0;
        margin-top: 20px;
        height:250px;
    }
`
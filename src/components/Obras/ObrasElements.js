import styled from 'styled-components'

export const Obras = styled.section`
    padding: 90px 80px 0 80px; 
    @media screen and (max-width: 768px){
        padding:  90px 0px;
    }
    color: #121212;
`

export const ObrasH1 = styled.h1`
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 30px;
    font-size: 30px;

    @media screen and (max-width: 768px){
        text-align:center;
    }
`


export const ObrasContainer = styled.div`
    display: flex;
    overflow: scroll;
    height: 100%;
    
    
`
export const ObrasContent = styled.div`
    padding: 10px 20px;
`


export const ObrasCard = styled.div`
    flex: 1 0 200px;
    margin: 0 30px;
    
`




export const ObrasImg = styled.img`
    width:350px;
    height:250px;
    border-radius:15px;
    max-width: 100%;
    display: block;
    transition: 0.08s all ease-in-out;

    &:hover{
        transform: scale(1.05);
        transition: 0.08s all ease-in-out;
    }

    @media screen and (max-width: 768px){
        margin-left: 0;
        margin-top: 20px;
        height:300px;

        &:hover{
        transform: scale(1.04);
        transition: 0.08s all ease-in-out;
    }
    }

`


export const ObrasTitulo = styled.h2`
    font-family: 'Montserrat', sans-serif;
`


export const ObrasP = styled.p`
    font-family: 'Noto Sans JP', sans-serif;
`



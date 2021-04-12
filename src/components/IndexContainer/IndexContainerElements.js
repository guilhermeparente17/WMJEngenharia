import styled from 'styled-components'

export const IndexContainer = styled.div`
    background: #000;
    display: flex;
    justify-content:none;
    align-items:none;
    padding: 0 30px;
    height:700px;
    position: relative;
    z-index:1;

    @media screen and (max-width: 768px){
        justify-content:center;

    }

    &:before {
        content: '';
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%,
        rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    } 
`

export const FotoBg = styled.div`
    position: absolute;
    top:0;
    right: 0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const Foto = styled.img`
    width: 100%;
    height:100%;
    -o-object-fit:cover;
    object-fit: cover;
    background: #232a34;
`

export const IndexContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    margin-left: 150px;
    margin-top: 150px;
    position: absolute;
    display: flex;
    justify-content:center;
    flex-direction: column;

    @media screen and (max-width: 768px){
        max-width: none;
        margin-left: 0px;
    }
`

export const IndexH1 = styled.h1`
    color: #fff;
    font-size: 68px;
    font-family: 'Noto Sans SC', sans-serif;
    @media screen and (max-width: 768px){
        font-size: 50px;
        text-align: center;
    }
    @media screen and (max-width: 480px){
        font-size: 42px;
    }
`

export const IndexP = styled.p`
    margin-top: 44px;
    color: #fff;
    font-size: 30px;
    text-align: left;
    max-width: 600px;
    font-family: 'Roboto', sans-serif;
    @media screen and (max-width: 768px){
        font-size: 24;
        text-align: center;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const B = styled.p`
    font-family: 'Noto Sans SC', sans-serif;
`
export const IndexBtnWrapper = styled.div`
    margin-top: 32px;


    @media screen and (max-width: 768px){
        display: flex;
        justify-content:center;
    }

`
export const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    color: #fff;
    background: #008C00;
    padding: 20px 20px;
    border:none;
    border-radius: 20px;
    cursor: pointer;
    outline:none;
    transition: 0.2s ease-in-out;

    &:hover{
        background: #08A334;
        transition: 0.4s ease-in-out;
    }

    @media screen and (max-width: 768px){
        font-size: 24;
        text-align: center;
        padding: 20px 50px;
    }
`
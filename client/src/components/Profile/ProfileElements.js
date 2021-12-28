import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    padding-top: 20vh;
    height: 80vh;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    /* background-color: red; */
    overflow-y: scroll;
`
export const ImgProfile = styled.img`
    width: 120px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid #000;
    margin-bottom: 0.9em;

    &:hover{
        border: 2px solid #1ED760;
    }
`
export const ProfileName = styled.a`
    margin: 0;
    margin-bottom: 0.9em;
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.8em;
    transition: all 0.4s ease-in;
    &:hover{
        color:#1ED760;
    }
`
export const ProfileInfo = styled.div`
    display: flex;
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-left: 2.5em;
`
export const InfoNumber = styled.p`
    margin: 0;
    color: #1ED760;
    font-weight: bold;
`

export const InfoTag = styled.p`
    margin: 0;
    color: #9B9B9B;
`
export const BodyContainer = styled.div`
    display: flex;
`

export const BodyItem = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-left: 1.2em;
`

export const Title = styled.p`
    font-weight: bold;
`
export const InfoItem = styled.div`
    padding: 0.15em 0.8em 0.15em 0.35em;
    background: #1D1D1D;
    display: flex;
    border-radius: 0.25em;
    align-items:center;
    margin-bottom: 0.5em;
    cursor: pointer;
    &:hover{
        background-color: #282828;
    }
`
export const ImgItem = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: yellow;
`
export const TextItem = styled.p`
    margin-left: 0.5em;
    font-size: 1.2em;
    &:hover{
        color: #1ED760;
        text-decoration: underline;
    }
`


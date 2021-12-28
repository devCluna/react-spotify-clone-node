import styled from "styled-components";

export const UserContainer = styled.div`
    position: absolute;
    top: 1.5em;
    right: 005em;
    color: #ffff;
`
export const UserInfoContainer = styled.div`
    display: flex;
    background: #1D1D1D;
    align-items: center;
    border-radius: 18px ;
    padding-right: 0.5em;
    border: 1.5px solid #ACACAC;
    cursor: pointer;

    &:hover{
        background-color: #282828;
        border: 1.5px solid #1ED760;
    }
`

export const ImgUser = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: black;
`

export const UserName = styled.p`
    margin: 0;
    margin-left: 0.35em;
    
    font-weight: bold;
`

export const UserOptionsContainer = styled.div`
    background: #1D1D1D;
    margin-top: 0.7em ;
    border: 1.5px solid #1D1D1D;

    &:hover{
        border: 1.5px solid #ACACAC;
    }

`

export const UserOption = styled.p`
    margin: 0;
    padding: 0.5em;
    cursor: pointer;
    &:hover{
        background-color: #282828;
        color: #1ED760;
    }
`
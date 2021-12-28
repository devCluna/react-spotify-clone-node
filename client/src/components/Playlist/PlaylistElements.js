import { BsFillPlayCircleFill } from "react-icons/bs";
import styled from "styled-components";

export const PlaylistContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #000;
   
`
export const InfoContainer = styled.div`
    display: flex;
    
`

export const PlaylistName = styled.p`
    margin-bottom: 0;
    font-weight: bold;
`

export const LikedQuantity = styled.p`
    margin-top: 0;
`

export const Header = styled.div`
    width: 100%;
    height: 15vh;
    background: red;
    display: flex;
    align-items: flex-end;
    color:#ACACAC;
    cursor: pointer;
    border-radius: 0.2em;
    border: 1px solid rgba(25,25,25,1);
    background-color: #181818;
    overflow: hidden;

    &:hover{
        border: 1px solid #1DB954;
        ${PlaylistName}{
            color: #1DB954;
        }

        ${LikedQuantity}{
            color: white;
        }
    }
`

export const ImgHeader = styled.img`
    width: calc(25%-190px);
    height: 100%;
    bottom: 0;
    margin-right: 0.5em;
    transition: all 0.5s ease-in;

    &:hover{
        filter: blur(0.9px)
    }
`

export const Body = styled.div`
    color: #ACACAC;
    overflow-y: scroll;
    height: 75%;
    margin-top: 1.2em;

    
`
export const HeadTable = styled.div`
    display: grid;
    margin-bottom: 0.5em;
    grid-template-columns: 0.15fr 1.85fr 1.5fr 1fr 0.5fr;
    border-bottom : 1px solid #ACACAC ;

    @media only screen and (max-width: 600px) {
        grid-template-columns: 0.15fr 2fr 1.5fr;
    }
`
export const HeadTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 0.2em;

`
export const HeadDate = styled.h3`
    margin-top: 0;
    margin-bottom: 0.2em;

    @media only screen and (max-width: 600px) {
    display: none;
    }
`

export const HeadTime = styled.h3`
    margin-top: 0;
    margin-bottom: 0.2em;
    @media only screen and (max-width: 600px) {
    display: none;
    }
`
export const PlayItem = styled(BsFillPlayCircleFill)`
    color:#1DB954;
    font-size: 30px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 0.40em;
    left: 0.2em;
    opacity: 0;
    z-index: 1;
    transition: all 0.8s ease;
`

export const BodyTable = styled.div`
    display: grid;
    /* background: red; */
    grid-gap: 0.5em;
    margin-bottom: 0.5em;
    border-radius: 0.3em;
    cursor: pointer;

    grid-template-columns: 0.15fr 1.85fr 1.5fr 1fr 0.5fr;

    &:hover{
        background-color: #2A2A2A;
        color: white;

        ${PlayItem}{
            opacity: 1;
        }
    }

    @media only screen and (max-width: 600px) {
        grid-template-columns: 0.15fr 2fr 1.5fr;
    }
    
`
export const BodyP = styled.p`
    cursor: pointer;
    z-index: 0;
`

export const BodyTitle = styled.div`
    display: flex;
    align-items:center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
`

export const BodyAlbumP = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover{
        color: #1DB954;
        text-decoration: underline;
    }
`
export const BodySongName = styled.p`
    margin: 0;
`

export const BodyDateP = styled.p`
    @media only screen and (max-width: 600px) {
    display: none;
}
`

export const BodyTimeP = styled.p`
    @media only screen and (max-width: 600px) {
    display: none;
}
`


export const BodyImg = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 0.5em;
    
`



export const BodyArtist = styled.p`
    margin: 0;
    &:hover{
        color: #1DB954;
        text-decoration: underline;
    }
`


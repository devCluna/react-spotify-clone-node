import { AiTwotonePlayCircle } from 'react-icons/ai'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import styled from 'styled-components'

export const HomeContainer = styled.div`
    background-color: #121212;
    
    max-width: 100%;
    height: 100%;
    overflow-y: scroll;

    scrollbar-width: none;

    &::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent; 
     }
`

export const HomeItem = styled.div`
    

`
export const TitleH2 = styled.h2`
    margin-bottom: 0.29em;
    margin-left: 0.35em;
    color: white;
`
export const InfoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6em;
`
export const PlayItem = styled(BsFillPlayCircleFill)`
    color:#1DB954;
    font-size: 50px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 2.2em;
    right: 0.5em ;
    opacity: 0;
    transition: all 0.8s ease;
`

export const InfoItem = styled.div`
    max-width: 150px;
    max-height: 240px;
    background: blue;
    cursor: pointer;
    padding: 1.2em;
    border-radius: 0.25em;
    background-color: rgba(29,29,29,1);
    color: #F3F3F3;
    transition: all 0.3s ease-in;
    position: relative;
    
    overflow-y: hidden;
    
    

    &:hover{
        background-color: rgba(39,39,39,1);

        ${PlayItem}{
            opacity: 1;
        }
    }
`

export const ImgItem = styled.img`
    width: 100%;
    
`


export const NameItem = styled.p`
    width: 100%;
    font-weight: bold;
    margin-bottom: 0.35em;
    
`
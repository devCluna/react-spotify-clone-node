import { BsFillPlayCircleFill } from 'react-icons/bs'
import styled from 'styled-components'

export const SearchContainer = styled.div`
    height: 80vh;
    overflow-y: scroll;

    @media only screen and (max-width: 600px) {
        height: 72vh;
    }
`
export const Form = styled.form`
    margin-top: 1.8em;
    margin-bottom: 1.5em;
`

export const SearchInput = styled.input`
    width: 85%;
    color: white;
    margin-left: 0.5em;
    margin-right: 0.5em;
    align-self: center;
    font-size: 2.5em;
    background: none;
    outline: none;
    border: none;

    &:focus{
        border-bottom: 1px solid white;
    }
`

export const SearchResults = styled.div`

`

export const ImgTrack = styled.img`
    width: 100%;
    height: 100%;
`
export const NameTrack = styled.p`
    margin: 0;
`
export const TrackDate = styled.div`
    @media only screen and (max-width: 600px) {
        display: none;
    }
`

export const TrackDuration = styled.div`
    @media only screen and (max-width: 600px) {
        display: none;
    }
`
export const TrackDescription = styled.div`
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap;
`
export const NameArtist = styled.a`
    
`
export const NameAlbum = styled.a`
    
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

export const SearchItem = styled.div`
    color : #A1A4A6;
    display: grid;
    grid-template-columns: 0.20fr 1.70fr 1.6fr 1fr 0.5fr;
    grid-gap: 0.5em;
    margin-bottom: 0.9em;
    align-items: center;
    padding-top: 0.3em;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #A1A4A6;;
    cursor: pointer;
    position: relative;
    
    @media only screen and (max-width: 600px) {
        grid-template-columns: 0.4fr 1.70fr 1.6fr;
    }
    
    &:hover{
        background : #282828;
        ${NameTrack}{
            color: white;  
        }
        ${NameArtist}{
            color: #1ED760; 
            text-decoration: underline;
        }
        ${NameAlbum}{
            color: #1ED760;
            text-decoration: underline;
        }
        ${PlayItem}{
            opacity: 1;
        }
    }
`

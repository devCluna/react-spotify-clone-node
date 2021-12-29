import styled from 'styled-components'
import  {RiHome5Line, RiHome5Fill} from 'react-icons/ri'
import {BsFillCaretDownFill,BsFillCaretUpFill} from 'react-icons/bs'
import {IoMdHeart,IoMdHeartEmpty} from 'react-icons/io'
import {RiPlayListFill} from 'react-icons/ri'
import {RiSearch2Line, RiSearch2Fill} from 'react-icons/ri'

export const SidebarContainer = styled.div`
    /* height: 80vh;
    width: 12vw; */
    grid-column: 1/2;
    background-color: #000000;
    
    order: 1;
    padding: 0.5em;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    grid-column: 1/-1;
    grid-row: 3/4;
    order:3;
    flex-direction: row;
    
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    
    
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    
} 
`

export const SpotifyLogo = styled.img`
    width: 39%;
    height: auto;
    align-self: center;
    @media only screen and (max-width: 600px) {
        display: none;
    }
`
export const SidebarOptionContainer=styled.div`
    font-size: 15px;
    margin-top: 0.8em;

    

    @media only screen and (max-width: 600px) {
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
`
export const SidebarPlayListContainer= styled.div`
    font-size: 15px;
    margin-top: 0.8em;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`

export const SidebarOptionItem = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${(props)=> props.toggleMenu ? "white":"#9b9b9b"};
    background-color: ${(props)=> props.toggleMenu && '#282828'};
    transition: all 0.5s ease-in-out;
    border-radius: 0.25em;
    padding: 0.5em;

    &:hover{
        color: #ffff;
        background-color: #282828;
    }

    @media only screen and (max-width: 600px) {
        background-color: #000;
        flex-direction: column;
        &:hover{
        color: #ffff;
        background-color: #000;
    }
    }
`

export const SidebarPlayListOptionItem = styled.div`
    display: none;
    align-items: center;
    cursor: pointer;
    color: ${(props)=> props.toggleMenu ? "white":"#9b9b9b"};
    transition: all 0.5s ease-in-out;
    border-radius: 0.25em;
    padding: 0.5em;

    &:hover{
        color: #ffff;
        background-color: #282828;
    }

    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        &:hover{
        color: #ffff;
        background-color: #000;
        }
    }

`

export const SidebarOption = styled.div`
    margin-left: 0.12em;
    font-weight: bold;
`

export const HomeIconUnselected = styled(RiHome5Line)`

`

export const HomeIconSelected = styled(RiHome5Fill)`

`

export const SearchIconUnselected = styled(RiSearch2Line)``

export const SearchIconSelected = styled(RiSearch2Fill)``

export const LikedSongSelected = styled(IoMdHeart)`

` 

export const LikedSongUnselected = styled(IoMdHeartEmpty)`

`

export const PlaylistLogo = styled(RiPlayListFill)`

`


export const SidebarHr = styled.hr`
    color: #ACACAC;
    width: 100%;
    @media only screen and (max-width: 600px) {
        display: none;
    }
`

export const ArrowDown = styled(BsFillCaretDownFill)`

@media only screen and (max-width: 600px) {
    display: none;
}
`

export const ArrowUp = styled(BsFillCaretUpFill)`

@media only screen and (max-width: 600px) {
    display: none;
}
`

export const PlaylistOption = styled.div`
    color: #ACACAC;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-radius: 0.25em;
    padding: 0.5em;
    background-color: ${(props)=> props.toggleMenu &&  '#282828'};

    &:hover{
        color: #fff;
        background-color: #282828;
    }

    @media only screen and (max-width: 600px) {
    display: none;
}
`

export const PlaylistsContainer = styled.ul`
    color: #ACACAC;
    list-style: none;
    margin-top: 0.2em;
    height: 80vh;
    padding: 0;
    /* background-color: red; */

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`

export const PlaylistItem = styled.li`
    margin: 0;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 0.25em;

    &:hover{
        color: #fff;
    }
`
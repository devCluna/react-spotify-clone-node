import { ArrowDown, ArrowUp, HomeIconSelected, HomeIconUnselected, LikedSongSelected, LikedSongUnselected, PlaylistItem, PlaylistLogo, PlaylistOption, PlaylistsContainer, SearchIconSelected, SearchIconUnselected, SidebarContainer, SidebarHr, SidebarOption, SidebarOptionContainer, SidebarOptionItem, SidebarPlayListContainer, SidebarPlayListOptionItem, SpotifyLogo } from "./SidebarElements"
import spotifyLogo from '../../assets/icons/01_RGB/Spotify_Icon_RGB_Green.png'
import { useEffect, useState } from "react"
import axios from "axios"

const Sidebar = ({section, setSection, accessToken, playlists, setPlaylists, setCurrentPlaylist, currentPlaylist, setUri}) => {
    const [togglePlaylists, setTogglePlaylists] = useState(false)
    
    const [toggleMenu, setToggleMenu] = useState({
        home: true,
        search: false,
        liked: false,
        playlists: false
    })

    useEffect(()=>{
        
        if(accessToken !== "undefined" && accessToken !== null ){
            axios.post('/me', {accessToken})
            .then(response=>{
                const {id} = response.data
                axios.post('/myPlaylists', {accessToken, userId:id})
                .then(response=>{
                    setPlaylists(response.data)
                    setCurrentPlaylist(response.data[0])
                })
            })
        }
    },[accessToken])

    return (
        <SidebarContainer>
            <SpotifyLogo src={spotifyLogo}/>
            <SidebarOptionContainer>
                
                <SidebarOptionItem toggleMenu={toggleMenu.home} onClick={()=> {
                    setToggleMenu({ home: true, search: false, liked: false, playlists: false})
                    setSection('HOME')
                }}>
                    
                    {toggleMenu.home ? <HomeIconSelected/> : <HomeIconUnselected/>}
                    <SidebarOption>
                        Home
                    </SidebarOption>
                </SidebarOptionItem>
                
                <SidebarOptionItem toggleMenu={toggleMenu.search} onClick={()=> {
                    setToggleMenu({ home: false, search: true, liked: false, playlists: false})
                    setSection('SEARCH')
                }}>
                    {toggleMenu.search ? <SearchIconSelected/> : <SearchIconUnselected/>}
                    <SidebarOption>
                        Search
                    </SidebarOption>
                </SidebarOptionItem>

                <SidebarOptionItem toggleMenu={toggleMenu.liked} onClick={()=> {
                    setToggleMenu({ home: false, search: false, liked: true, playlists: false})
                    setSection('LIKED')
                }}>
                    
                    {toggleMenu.liked ? <LikedSongSelected/> : <LikedSongUnselected/>}
                    <SidebarOption >
                        Liked Songs
                    </SidebarOption>
                </SidebarOptionItem>

                <SidebarPlayListOptionItem toggleMenu={toggleMenu.playlists} onClick={()=> {
                    setToggleMenu({ home: false, search: false, liked: false, playlists: true})
                    setTogglePlaylists(!togglePlaylists)
                    setSection('PLAYLISTS')
                }}>
                    <PlaylistLogo/>
                    <SidebarOption>
                        Playlists
                    </SidebarOption>
                </SidebarPlayListOptionItem> 

            </SidebarOptionContainer>
            <SidebarHr/>

            <SidebarPlayListContainer>
                <PlaylistOption toggleMenu={toggleMenu.playlists} onClick={()=>{
                    setToggleMenu({ home: false, search: false, liked: false, playlists: true})
                    setTogglePlaylists(!togglePlaylists)
                    setSection('PLAYLISTS')
                    
                }}>
                    PlayLists
                    {togglePlaylists ? <ArrowUp/> : <ArrowDown/>}
                </PlaylistOption>
            </SidebarPlayListContainer>

            {togglePlaylists && (
                <PlaylistsContainer>
                    {playlists?.map((playlist)=>(
                        <PlaylistItem key={playlist.id} onClick={()=>{
                            setCurrentPlaylist(playlist)
                            setSection('PLAYLISTS')
                            setUri(playlist.uri)
                            console.log(console.log(playlist))
                        }}>
                            {playlist.name}
                        </PlaylistItem>
                    ))}
                </PlaylistsContainer>)
            }
            

          
        </SidebarContainer>
    )
}

export default Sidebar

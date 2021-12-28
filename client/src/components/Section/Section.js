import Home from "../Home/Home"
import Liked from '../Liked/Liked'
import PlayList from "../Playlist/Playlist"
import PlayLists from "../Playlists/PlayLists"
import User from "../User/User"
import { SectionContainer } from "./SectionElements"

const Section = ({section, setSection, accessToken, uri, setUri, setPlay, playlists, currentPlaylist, setCurrentPlaylist, userInfo, setCode}) => {

    return(
        <SectionContainer>
            {section ==="HOME" && <Home accessToken={accessToken} setUri={setUri} setPlay={setPlay}/>}
            {section ==="SEARCH" && <p>SEARCH</p>}
            {section ==="LIKED" && <Liked accessToken={accessToken} setUri={setUri}/>}
            {section ==="PLAYLISTS" && <PlayLists setSection={setSection} accessToken={accessToken} currentPlaylist={currentPlaylist} setCurrentPlaylist={setCurrentPlaylist} playlists={playlists} setUri={setUri}/>}
            {section ==="PLAYLIST" && <PlayList setSection={setSection} section={section} accessToken={accessToken} currentPlaylist={currentPlaylist} playlists={playlists} setUri={setUri}/>}
            <User userInfo={userInfo} setCode={setCode}/>
        </SectionContainer>
    )
}

export default Section

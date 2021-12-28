import Home from "../Home/Home"
import Liked from '../Liked/Liked'
import PlayList from "../Playlist/Playlist"
import PlayLists from "../Playlists/PlayLists"
import Profile from "../Profile/Profile"
import Search from "../Search/Search"
import User from "../User/User"
import { SectionContainer } from "./SectionElements"

const Section = ({section, setSection, accessToken, uri, setUri, setPlay, playlists, currentPlaylist, setCurrentPlaylist, userInfo, setCode, userTopTracks, setUserTopTracks, userTopArtists, setUserTopArtists}) => {

    return(
        <SectionContainer>
            {section ==="HOME" && <Home accessToken={accessToken} setUri={setUri} setPlay={setPlay}/>}
            {section ==="SEARCH" && <Search accessToken={accessToken} setUri={setUri}/>}
            {section ==="LIKED" && <Liked accessToken={accessToken} setUri={setUri}/>}
            {section ==="PLAYLISTS" && <PlayLists setSection={setSection} accessToken={accessToken} currentPlaylist={currentPlaylist} setCurrentPlaylist={setCurrentPlaylist} playlists={playlists} setUri={setUri}/>}
            {section ==="PLAYLIST" && <PlayList setSection={setSection} section={section} accessToken={accessToken} currentPlaylist={currentPlaylist} playlists={playlists} setUri={setUri}/>}
            {section ==="PROFILE" && <Profile accessToken={accessToken} userInfo={userInfo} userTopTracks={userTopTracks} setUserTopTracks={setUserTopTracks} userTopArtists={userTopArtists} setUserTopArtists={setUserTopArtists}/>}
            <User userInfo={userInfo} setCode={setCode} setSection={setSection}/>
        </SectionContainer>
    )
}

export default Section

import { PlayerContainer, SpotifyContainer } from "./PlayerElements"
import SpotifyPlayer from 'react-spotify-web-playback'

const Player = ({accessToken, uri, play}) => {
   
    return (
        <PlayerContainer>
            <SpotifyContainer>
                {/* //If Access token is provided then Show the player */}
                {(accessToken !== 'undefined' && accessToken !== null) && 
                    <SpotifyPlayer
                    autoPlay={false}
                    play={play}
                    // syncExternalDevice={true}
                    token= {accessToken}
                    uris={[uri]}
  
                    magnifySliderOnHover = {true}
                    styles={{
                        bgColor: '#181818',
                        sliderColor: '#1cb954',
                        color: '#fff',
                        sliderHandleColor: '#fff',
                        trackArtistColor: '#ccc',
                        trackNameColor: '#fff',
                    }}
                />
                }
                
                
            </SpotifyContainer>
        </PlayerContainer>
    )
}

export default Player

import {PlaylistContainer, Header, ImgHeader, PlaylistName,LikedQuantity,Body,HeadTable,
    HeadTitle,
    HeadDate,
    HeadTime,
    BodyTable,
    BodyP,
    BodyTitle,
    PlayItem,
    BodyImg,
    BodySongName,
    BodyArtist,
    BodyAlbumP,
    BodyDateP,
    BodyTimeP } from './PlaylistElements'
import axios from "axios"
import {useEffect, useState} from 'react'

const PlayList = ({currentPlaylist, section, accessToken, setUri}) => {
    const [playlistId, setPlaylistId] = useState(currentPlaylist?.id)
    const [playlists, setPlaylists] = useState([])

    useEffect(()=>{
      if(playlistId !== null) {
          axios.post('/playlistTracks', {accessToken, playlistId})
          .then(response => {
              console.log(response.data.items)
              setPlaylists(response.data.items)
          })
      }
    },[section])

    const convertSeconds = (milliseconds) =>{
        let minutes = Math.floor(milliseconds/60000)
        let seconds= ((milliseconds % 60000) / 1000).toFixed(0);

        const time = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        return time
    }

    return (
        <PlaylistContainer>
            <Header>
                {/* //Ramdom Album Image */}
                <ImgHeader src={currentPlaylist.images[0]?.url}/>
                <div>
                    <PlaylistName>{currentPlaylist.name}</PlaylistName>
                    <LikedQuantity>{currentPlaylist.tracks.total} Tracks</LikedQuantity>
                </div>
            </Header>

            <Body>
                <HeadTable>
                    <HeadTitle style={{justifySelf: "center"}}>#</HeadTitle>
                    <HeadTitle style={{justifySelf: "center"}}>Title</HeadTitle>
                    <HeadTitle>Album</HeadTitle>
                    <HeadDate>Date</HeadDate>
                    <HeadTime style={{justifySelf: "center"}}>Time</HeadTime>
                    
                </HeadTable>

                {playlists?.map(playlist=>(
                    <BodyTable key={playlist.track.id}>
                       <BodyP style={{justifySelf: "center"}}>
                           {playlists.indexOf(playlist)+1}
                        </BodyP>

                        <BodyTitle>
                             <PlayItem onClick={()=>{
                                 setUri(playlist.track.uri)
                             }}/>
                            <BodyImg src={playlist.track.album.images[0]?.url}/>
                            <div >
                                <BodySongName>{playlist.track.name}</BodySongName>
                                <BodyArtist>{playlist.track.artists[0].name}</BodyArtist>
                            </div>
                            
                        </BodyTitle>

                        <BodyAlbumP>{playlist.track.album.name}</BodyAlbumP>
                        <BodyDateP>{playlist.added_at}</BodyDateP>
                        <BodyTimeP style={{justifySelf: "center"}}>
                            {convertSeconds(playlist.track.duration_ms)}
                        </BodyTimeP>
                    </BodyTable>
                ))}
            </Body>
            
        </PlaylistContainer>
    )
}

export default PlayList

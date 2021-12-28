import axios from "axios"
import { useEffect, useState } from "react"
import { Body, BodyAlbumP, BodyArtist, BodyDateP, BodyImg, BodyP, BodySongName, BodyTable, BodyTimeP, BodyTitle, HeadDate, Header, HeadTable, HeadTime, HeadTitle, ImgHeader, LikedContainer, LikedName, LikedQuantity, PlayItem } from "./LikedElements"


const Liked = ({accessToken, setUri}) => {
    const [likedTracks, setLikedTracks] = useState([])

    useEffect(() => {
            document.title = "Liked Tracks | Spotify Client" 
    
        if(accessToken !== "undefined" && accessToken !== null ){
            axios.post("/likedTracks",{
            accessToken: accessToken
        })
        .then(response=> {
          setLikedTracks(response.data)
        })
        .catch(err => {
          console.log(err)
        })
        }
        
      },[accessToken])

    const convertSeconds = (milliseconds) => {
        let minutes = Math.floor(milliseconds/60000)
        let seconds= ((milliseconds % 60000) / 1000).toFixed(0);

        const time = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        return time
    }

    return (
        <LikedContainer>
            <Header>
                {/* //Ramdom Album Image */}
                <ImgHeader src={likedTracks.length > 0 ? likedTracks[Math.floor(Math.random() * likedTracks.length+1)]?.track.album.images[0].url : ""}/>
                <div>
                    <LikedName>Your liked songs</LikedName>
                    <LikedQuantity>{likedTracks.length} Tracks</LikedQuantity>
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

                {likedTracks.map(likedTrack =>(
                    <BodyTable key={likedTrack.track.id}>
                        <BodyP style={{justifySelf: "center"}}>
                            {likedTracks.indexOf(likedTrack)+1}
                            
                        </BodyP>
                        <BodyTitle>
                             <PlayItem onClick={()=>setUri(likedTrack.track.uri)}/>
                            <BodyImg src={likedTrack.track.album.images[2].url}/>
                            <div >
                                <BodySongName>{likedTrack.track.name}</BodySongName>
                                <BodyArtist>{likedTrack.track.artists[0]?.name}</BodyArtist>
                            </div>
                            
                        </BodyTitle>
                        <BodyAlbumP>{likedTrack.track.album.name}</BodyAlbumP>
                        <BodyDateP>{likedTrack.added_at}</BodyDateP>
                        <BodyTimeP style={{justifySelf: "center"}}>{convertSeconds(likedTrack.track.duration_ms)}</BodyTimeP>
                    </BodyTable>
                ))}

                
            </Body>
            
        </LikedContainer>
    )
}

export default Liked
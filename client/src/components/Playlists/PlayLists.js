import { useEffect } from "react"
import { InfoContainer } from "../Home/HomeElements"
import { Header, ImgHeader, PlayListsContainer, PlayListName, PlayListQuantity, Body, BodyTable, BodyP, BodyTitle, BodySongName, BodyArtist, BodyDateP, BodyTimeP, BodyAlbumP, BodyImg, PlayItem, HeadTable, HeadTitle, HeadDate, HeadTime } from "./PlayListsElements"

const PlayLists = ({accessToken, playlists, currentPlaylist, setSection, setCurrentPlaylist, setUri}) => {
    
    return (
        <PlayListsContainer>
            <Header>
                <ImgHeader src={currentPlaylist.images[0]?.url}/>
                <div>
                    <PlayListName>{currentPlaylist && currentPlaylist.name}</PlayListName>
                    <PlayListQuantity>{currentPlaylist.tracks.total} Tracks</PlayListQuantity>
                </div>
            </Header>

            <Body>

            <HeadTable>
                    <HeadTitle style={{justifySelf: "center"}}>#</HeadTitle>
                    <HeadTitle style={{justifySelf: "center"}}>Title</HeadTitle>
                    <HeadTitle>Description</HeadTitle>
                    <HeadTime style={{justifySelf: "center"}}>Tracks</HeadTime>
                    
                </HeadTable>
            {playlists?.map(playlist => (
                <BodyTable key={playlist.id} >
                    <BodyP style={{justifySelf: "center"}}>{playlists.indexOf(playlist)+1}</BodyP>
                    <BodyTitle>
                      <PlayItem onClick={()=>{
                          setUri(playlist?.uri)
                          setCurrentPlaylist(playlist)
                      }}/>
                       <BodyImg src={playlist.images[0]?.url}/>
                        <div >
                          <BodySongName onClick={()=>{
                        setSection('PLAYLIST')
                        setCurrentPlaylist(playlist)
                }}>{playlist.name}</BodySongName>
                          <BodyArtist>{playlist.owner.display_name}</BodyArtist>
                        </div>    
                    </BodyTitle>
                    <BodyAlbumP>{playlist.description}</BodyAlbumP>
                    <BodyTimeP style={{justifySelf: "center"}}>{playlist.tracks.total} Tracks</BodyTimeP>
                </BodyTable>
            ))}
            </Body>
            
        </PlayListsContainer>
    )
}

export default PlayLists
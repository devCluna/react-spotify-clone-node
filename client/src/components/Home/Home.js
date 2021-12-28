
import axios from "axios"
import { useEffect, useState } from "react"
import { HomeContainer, HomeItem, ImgItem, InfoContainer, InfoItem, NameItem, PlayItem, TitleH2 } from "./HomeElements"

const Home = ({accessToken, uri, setUri, setPlay}) => {
    const [newReleases, setNewReleases] = useState([])
    const [featuredPlaylists, setFeaturedPlaylists] = useState([])

    useEffect(()=>{
        document.title = "Home | Spotify Client" 
    
        if(accessToken !== "undefined" && accessToken !== null ){
            axios.post('/me', {accessToken})
            .then(response=>{
                const {country} = response.data
                axios.post('/newReleases', {accessToken,country})
                .then(response=>{
                    // console.log(response.data)
                    setNewReleases(response.data)
                })

                axios.post('/featuredPlaylist',{accessToken, country})
                .then(response => {
                    // console.log(response.data)
                setFeaturedPlaylists(response.data)
                })
            })
        }
    },[accessToken])
 
    return (
        <HomeContainer>
            <HomeItem>
            <TitleH2>New Releases</TitleH2>
            <InfoContainer>
                {newReleases.map(release => (
                    <InfoItem key={release.id} 
                            onClick={()=>{
                            setUri(release.uri)
                            setPlay(true)    
                        }}>
                        <ImgItem src={release.images[0].url}/>
                            <PlayItem />
                                <NameItem>{release.name}</NameItem>
                                {release.artists.map(artist =>(
                                    <div key={artist.id}>
                                        <p>{artist.name}</p>
                                    </div>
                                ))}
                    </InfoItem>            
                ))}
            </InfoContainer>
            </HomeItem>

            <HomeItem>
                <TitleH2>Featured Playlists</TitleH2>
                <InfoContainer>
                {featuredPlaylists.map(playlist => (
                    <InfoItem key={playlist.id}
                        onClick={()=>{
                        setUri(playlist.uri)
                        setPlay(true)    
                    }}
                    >
                        <ImgItem src={playlist.images[0].url}/>
                        <PlayItem/>
                            <NameItem>{playlist.name}</NameItem>
                            {/* {release.artists.map(artist =>(
                                <span key={artist.key}>{artist.name}</span>
                            ))} */}
                    </InfoItem>   
                ))}
                </InfoContainer> 
            </HomeItem>

        </HomeContainer>
    )
}

export default Home

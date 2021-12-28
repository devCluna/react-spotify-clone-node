import axios from "axios"
import { useEffect, useState } from "react"
import { Form, ImgTrack, NameAlbum, NameArtist, NameTrack, PlayItem, SearchContainer, SearchInput, SearchItem, SearchResults, TrackDate, TrackDescription, TrackDuration } from "./SearchElements"

const Search = ({accessToken, setUri}) => {
    const [search, setSearch] = useState("")
    const [arraySearch, setArraySearch] = useState([])

    useEffect(()=>{
        document.title = "Search | Spotify Client" 
     },[])

    const convertSeconds = (milliseconds) => {
        let minutes = Math.floor(milliseconds/60000)
        let seconds= ((milliseconds % 60000) / 1000).toFixed(0);

        const time = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        return time
    }

    const handleSearch = (search) => {
        axios.post('/searchTrack', {accessToken, search})
        .then(response => {
            setArraySearch(response.data.tracks.items)
        })
    }
    return (
        <SearchContainer>
            <Form onSubmit={(e)=>{
                e.preventDefault()
                handleSearch(search)
            }}> 
                <SearchInput placeholder="Search......" value={search} onChange={(e)=> setSearch(e.target.value)}/>
            </Form>
            <SearchResults>
                {arraySearch?.map(search => (
                    <SearchItem key={search.id}>
                        <PlayItem onClick={()=>setUri(search.uri)}/>
                        <ImgTrack src={search.album.images[0].url}/>
                        <TrackDescription>
                            <NameTrack> {search.name} </NameTrack>
                            <NameArtist> {search.artists[0].name} </NameArtist>
                        </TrackDescription>
                        <TrackDescription>
                            <NameAlbum> {search.album.name} </NameAlbum>
                        </TrackDescription>
                        <TrackDate>
                            <NameTrack> {search.album.release_date} </NameTrack>
                        </TrackDate>
                        <TrackDuration>
                            <NameTrack> {convertSeconds(search.duration_ms)} </NameTrack>
                        </TrackDuration>
                    </SearchItem>
                ))}
            </SearchResults>
        </SearchContainer>
    )
}

export default Search

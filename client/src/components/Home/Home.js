
import axios from "axios"
import { useEffect, useState } from "react"
import { HomeContainer, HomeItem, ImgItem, InfoContainer, InfoItem, NameItem, PlayItem, TitleH2 } from "./HomeElements"

const Home = ({accessToken, uri, setUri, setPlay}) => {
    const [newReleases, setNewReleases] = useState([])
    const [featuredPlaylists, setFeaturedPlaylists] = useState([])

    useEffect(()=>{
        
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
        <></>
    )
}

export default Home

import axios from "axios"
import { useEffect, useState } from "react"

const Dashboard = ({code, setCode}) => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'))
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'))
    const [expiresIn, setExpiresIn] = useState(localStorage.getItem('expiresIn'))
    const [expiredToken, setExpiredToken] = useState(true)
    const [section, setSection] = useState('HOME')
    const [uri, setUri] = useState('spotify:album:1QarGcpgUIOxlH658yPZ5R')
    const [play, setPlay] = useState(false)
    const [userInfo, setUserInfo] = useState()
    const [playlists, setPlaylists] = useState([])
    const [currentPlaylist, setCurrentPlaylist] = useState([])

    useEffect(()=>{
        console.log("Dashboards")
        if(localStorage.getItem('accessToken') === 'undefined' || localStorage.getItem('accessToken') === null){
            console.log("Dashboards")
            axios.post('/login', {code})
            .then(response => {
                const {accessToken, refreshToken, expiresIn} = response.data
                setAccessToken(accessToken)
                localStorage.setItem('accessToken', accessToken)
                localStorage.setItem('refreshToken', refreshToken)
                localStorage.setItem('expiresIn', expiresIn)
            })
            .catch(err =>{
                console.log(err)
            })
        }
    },[code])


    //Check if AccessToken still Valid
    useEffect(()=>{
        
        if(localStorage.getItem('accessToken') !== null && localStorage.getItem('accessToken') !== 'undefined'){
            axios.post('/checkToken', {accessToken})
            .then(response=>{
                console.log("CHECK_TOKEN")
                //Refresh Token
                if(response.data.statusCode === 401) {
                    console.log("TOKEN_HAS_EXPIRED")
                    axios.post('/refresh', {refreshToken})
                    .then(response=>{
                        console.log("TOKEN_HAS_BEEN_REFRESHED")
                        localStorage.setItem('accessToken', response.data.accessToken)
                        localStorage.setItem('expiresIn', response.data.expiresIn)
                        setAccessToken(response.data.accessToken)
                    })
                }else {
                    console.log("TOKEN_STILL_VALID")
                }
            })
        }
    },[expiredToken])

    
    return (
       <></>
    )
}

export default Dashboard

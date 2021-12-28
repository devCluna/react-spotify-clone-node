import { useEffect } from "react"
import { AUTH_URL } from "../../lib/spotify"

const Login = () => {
    useEffect(()=>{
       document.title = "Spotify Client Login" 
    },[])

    return (
        <div>
           <a href={AUTH_URL}>Login with Spotify</a> 
        </div>
    )
}

export default Login

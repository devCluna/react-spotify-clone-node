import { useEffect, useRef, useState } from "react"
import { AUTH_URL } from "../../lib/spotify"
import { Description, DescriptionContainer, Developer, Disclaimer, DisclaimerButton, DisclaimerP, Github, Img, Linkedin, LoginBody, LoginButton, LoginContainer, LoginFooter, SocialMedia, Span, Title, Trademarks, Twitter, Video, Web } from "./LoginElements"
import logo from '../../assets/logos/01_RGB/Spotify_Logo_RGB_White.png'
import logo2 from '../../assets/logos/01_RGB/Spotify_Logo_RGB_Green.png'
import video1 from '../../assets/videos/video1.mp4'
import Typed from 'react-typed';

const Login = () => {
    const [focus, setFocus] = useState(false)
    const [toggleDisclaimer, setToggleDisclaimer] = useState(true)
    useEffect(()=>{
       document.title = "Spotify Client Login" 
    },[])


    return (
        // <div>
        //    <a href={AUTH_URL}>Login with Spotify</a> 
        // </div>
        <LoginContainer>
            <LoginBody>
            <Video src={video1} autoPlay loop type="video/mp4"/>
                <DescriptionContainer>
                    <Img  
                        onClick={()=>window.location.assign('https://www.spotify.com')}
                        src={focus ? logo : logo2} onMouseEnter={()=>{setFocus(false)}}
                        onMouseLeave={()=>{
                            setFocus(true)
                        }}
                    />
                    <Description> 
                    <Title>
                        Listen without limits !!!
                    </Title>
                    <Typed
                        strings={[
                            "Play millions of songs ad-free & on-demand",
                            "Share",
                            "Explore",
                            "Listen to the songs you love",
                            "Discover new music and podcasts",
                            "Spotify is all the music you'll ever need"
                        ]}
                        shuffle={true}
                        
                        typeSpeed={40}
                        backSpeed={50}
                        loop 
                    />
                    </Description>
                    <LoginButton href={AUTH_URL}>Login with Spotify</LoginButton>
                </DescriptionContainer>

            </LoginBody>
            <LoginFooter>
                <SocialMedia>
                    <Github onClick={()=>window.location.assign('https://github.com/devCluna')}/>
                    <Twitter onClick={()=>window.location.assign('https://twitter.com/DevCLuna')}/>
                    <Linkedin onClick={()=>window.location.assign('https://www.linkedin.com/in/devcluna')}/>
                    <Web onClick={()=>window.location.assign('https://www.devcluna.com')}/>
                </SocialMedia>
                <Developer>
                    Developed by <Span 
                     onClick={()=>window.location.assign('https://www.devcluna.com')}>
                         @devCluna</Span>
                </Developer>
                <Trademarks>
                    All trademarks belong to their owner
                </Trademarks>
            </LoginFooter>

            {toggleDisclaimer && 
                <Disclaimer onClick={()=> setToggleDisclaimer(false)}>
                <DisclaimerP >
                    This is a clone website intended to be an exercise in web application building - not for profit/commercial use. If you are looking for the real app go to open.spotify.com
                </DisclaimerP>
                <DisclaimerButton onClick={()=>window.location.assign('https://www.spotify.com')}>
                    Open on Spotify
                </DisclaimerButton>
                </Disclaimer>
            }
            
        </LoginContainer>
    )
}

export default Login

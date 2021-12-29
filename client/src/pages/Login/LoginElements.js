import styled from 'styled-components'
import {MdCancel} from 'react-icons/md'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import {BiWorld} from 'react-icons/bi'

export const LoginContainer = styled.div`
    position: relative;
    user-select: none;
`

export const LoginBody = styled.div`
    width: 100%;
    height: 95vh;
    align-items: center;
    justify-content: center;
    display: flex;
    
`
export const Video = styled.video`
    width: 100vw;
    height: 95vh;
    object-fit: cover;
    
    filter: blur(8px);
`
export const DescriptionContainer = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    position: absolute;
`
export const Title = styled.h2`
    margin-top: 0;
    margin-bottom: 0;
`

export const Description = styled.div`
    
    color: white;
    margin-left: 1em;
    margin-bottom: 0.6em;
    margin-top: 0.5em;
    font-size: 1.5em;
    text-shadow: 2px 1px 2px rgba(0,0,0,0.6);
`
export const LoginButton = styled.a`
    width: fit-content;
    margin-left: 1em;
    border-radius: 150px;
    padding: 0.6em 1.2em;
    background-color: rgba(31,229,102,0.7);
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: all 0.5s ease-in;
    &:hover{
        text-decoration: underline;
        background-color: #1FE566;
    }
`
export const Img = styled.img`
    margin-left: 0.8em;
    width: 250px;
    cursor: pointer;
`

export const LoginFooter = styled.div`
    background:#000;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5vh;
`
export const Disclaimer = styled.div`
    position: absolute;
    cursor: pointer;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    position: absolute;
    width: 100%;
    background: blue;
    background: rgb(173,41,151);
background: linear-gradient(90deg, rgba(173,41,151,1) 0%, rgba(80,152,242,1) 100%);
`
export const DisclaimerP = styled.p`
    width: 75vw;
    margin-left: 0.5em;

    @media only screen and (max-width: 600px) {
       width: 100vw;
    }
`
export const DisclaimerButton = styled.div`
    font-weight: bold;
    background: white;
    color: #000;
    border-radius: 150px;
    padding: 0.8em 1.5em;
    width: fit-content;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
        display: none;
    }

    &:hover{
        text-decoration: underline;
    }
`

export const Developer = styled.div``
export const Span = styled.span`
    cursor: pointer;
    font-weight: bold;
    &:hover{
        color:  #1FE566;
    }
`

export const Trademarks = styled.div`
    @media only screen and (max-width: 600px) {
       display: none;
    }
`
export const SocialMedia = styled.div``
export const Github = styled(BsGithub)`
    margin-right: 0.5em;
    cursor: pointer;
    &:hover{
        color: #1FE566;
    }
`
export const Twitter = styled(BsTwitter)`
    margin-right: 0.5em;
    cursor: pointer;
    &:hover{
        color: #1FE566;
    }
`
export const Linkedin = styled(BsLinkedin)`
    margin-right: 0.5em;
    cursor: pointer;
    &:hover{
        color: #1FE566;
    }
`
export const Web = styled(BiWorld)`
    cursor: pointer;
    &:hover{
        color: #1FE566;
    }
`
import axios from "axios"
import { useEffect } from "react"
import { BodyContainer, BodyItem, HeaderContainer, ImgItem, ImgProfile, InfoContainer, InfoItem, InfoNumber, InfoTag, ProfileInfo, ProfileName, TextDuration, TextItem, Title } from "./ProfileElements"

const Profile = ({userInfo, accessToken, userTopTracks, setUserTopTracks, userTopArtists, setUserTopArtists}) => {
    
    const convertSeconds = (milliseconds) => {
        let minutes = Math.floor(milliseconds/60000)
        let seconds= ((milliseconds % 60000) / 1000).toFixed(0);

        const time = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        return time
    }

    useEffect(()=>{
            document.title = "Profile - Spotify Client" 
    
        if(accessToken !== "undefined" && accessToken !== null ){
            axios.post('/userTopTracks', {accessToken})
            .then(response=>{
                setUserTopTracks(response.data.items)
            })

            axios.post('/userTopArtists', {accessToken})
            .then(response=>{
                setUserTopArtists(response.data.items)
            })
        }
    },[accessToken])
    return (
        <div style={{justifySelf: "center", color:"white"}}>
            <HeaderContainer>
                <ImgProfile src={userInfo?.images[0]?.url}/>
                <ProfileName target="_blank" href={`https://open.spotify.com/user/${userInfo.id}`}>{userInfo.display_name}</ProfileName>
                <ProfileInfo>
                    <InfoContainer>
                        <InfoNumber> {userInfo.followers.total} </InfoNumber>
                        <InfoTag> followers</InfoTag>
                    </InfoContainer>

                    <InfoContainer>
                        <InfoNumber> {userInfo.following ? userInfo.following.total : 0} </InfoNumber>
                        <InfoTag> followings</InfoTag>
                    </InfoContainer>

                    <InfoContainer>
                        <InfoNumber> {userInfo.country} </InfoNumber>
                        <InfoTag> country</InfoTag>
                    </InfoContainer>

                </ProfileInfo>

            <BodyContainer>
                <BodyItem>
                    <Title>Your Top Artists</Title>
                    {userTopArtists.map(artist => (
                        <InfoItem key={artist.id}>
                            <ImgItem src={artist.images[0].url}/>
                            <TextItem target="_blank" href={artist.external_urls.spotify}>{artist.name}</TextItem>
                        </InfoItem>
                    ))}
                </BodyItem>

                <BodyItem>
                    <Title>Your Top Tracks</Title>
                    {userTopTracks.map(track =>(
                        <InfoItem key={track.id}>
                            <ImgItem src={track.album.images[0].url}/>
                            <TextItem target="_blank" href={track.external_urls.spotify}>{track.name}</TextItem>
                            <TextDuration>{convertSeconds(track.duration_ms)}</TextDuration>
                    </InfoItem>
                    ))}
                </BodyItem>
            </BodyContainer>


            </HeaderContainer>
        </div>
    )
}

export default Profile

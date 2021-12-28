import { useEffect } from "react"
import { BodyContainer, BodyItem, HeaderContainer, ImgItem, ImgProfile, InfoContainer, InfoItem, InfoNumber, InfoTag, ProfileInfo, ProfileName, TextItem, Title } from "./ProfileElements"

const Profile = ({userInfo, accessToken}) => {
    useEffect(()=>{
        console.log(userInfo)
    },[])
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
                        <InfoNumber> {userInfo.country} </InfoNumber>
                        <InfoTag> country</InfoTag>
                    </InfoContainer>

                    <InfoContainer>
                        <InfoNumber> {userInfo.product} </InfoNumber>
                        <InfoTag> membership</InfoTag>
                    </InfoContainer>

                </ProfileInfo>

            <BodyContainer>
                <BodyItem>
                    <Title>Your Top Artists</Title>
                    <InfoItem>
                        <ImgItem/>
                        <TextItem>Dalas</TextItem>
                    </InfoItem>
                </BodyItem>

                <BodyItem>
                    <Title>Your Top Tracks</Title>
                    <InfoItem>
                        <ImgItem/>
                        <TextItem>Dalas</TextItem>
                    </InfoItem>
                    <InfoItem>
                        <ImgItem/>
                        <TextItem>Dalas</TextItem>
                    </InfoItem>

                    <InfoItem>
                        <ImgItem/>
                        <TextItem>Dalas</TextItem>
                    </InfoItem>
                </BodyItem>
            </BodyContainer>


            </HeaderContainer>
        </div>
    )
}

export default Profile

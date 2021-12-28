import { useState } from "react"
import { ImgUser, UserContainer, UserInfoContainer, UserName, UserOption, UserOptionsContainer } from "./UserElements"

const User = ({userInfo, setCode}) => {
    const [toggleUserMenu, setToggleUserMenu] = useState(false)
    return (
        <UserContainer>
            <UserInfoContainer onClick={()=>{
                setToggleUserMenu(!toggleUserMenu)
            }}>
                <ImgUser src={userInfo && userInfo?.images[0]?.url}/>
                <UserName> {userInfo?.display_name}</UserName>
            </UserInfoContainer>
            {toggleUserMenu && 
                <UserOptionsContainer>
                    <UserOption>Profile</UserOption>
                    <UserOption onClick={()=>{
                        setCode(false)
                        window.history.pushState({}, null, "/")
                    }}>Log Out</UserOption>
                </UserOptionsContainer>
            }
            
        </UserContainer>
    )
}

export default User

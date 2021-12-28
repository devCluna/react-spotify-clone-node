
const scopes = [
    "user-read-email",
    "playlist-read-private",
    "user-read-email",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-library-modify",
    "user-top-read",
    "app-remote-control",

    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-playback-position",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read"
].join(",")

const params = {
    scope: scopes,
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri : process.env.REACT_APP_REDIRECT_URI,
    response_type: "code"
}

const queryParamsString = new URLSearchParams(params)

export const AUTH_URL = "https://accounts.spotify.com/authorize?" + queryParamsString.toString() 
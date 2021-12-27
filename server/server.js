const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const SpotifyWebApi = require('spotify-web-api-node')

dotenv.config()
const app = express()

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

//REFRESH ENDPOINT
app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUri : process.env.REDIRECT_URI,
      refreshToken,
    })

    spotifyApi
      .refreshAccessToken()
      .then(data => {
        res.json({
          accessToken: data.body.access_token,
          expiresIn: data.body.expires_in,
        })
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(400)
      })
  })

//LOGIN ENDPOINT
app.post('/login', (req, res)=> {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUri : process.env.REDIRECT_URI,
})
    spotifyApi.authorizationCodeGrant(code)
    .then(data => {
      res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in
      })
      console.log("LOGIN REQUEST SUCCESSFULL")
    })
    .catch(err => {
        console.log(err)
      res.json(err)
    })
})

//MY_INFO ENDPOINT
app.post('/me' ,(req, res)=> {
    const accessToken = req.body.accessToken
    const spotifyApi = new SpotifyWebApi({
        accessToken: accessToken
    })
    
    spotifyApi.getMe()
    .then(response=> {
        console.log("CURRENT USER DATA SENT", new Date)
        res.json(response.body)
    })
    .catch(err => {
        res.json(err)
        console.log(err.statusCode, new Date)
    })
})

//NEW_RELEASES ENDPOINT
app.post('/newReleases', (req, res)=>{
    const accessToken = req.body.accessToken
    const country = req.body.country
  
    const spotifyApi = new SpotifyWebApi({
      accessToken: accessToken
    })
  
    spotifyApi.getNewReleases({ limit : 14, offset: 0, country: country})
    .then(response => {
      console.log('NEW RELEASES', new Date)
      res.json(response.body.albums.items)
    })
    .catch(err=>{
      console.log(err)
    })
  })



app.listen(process.env.PORT, ()=>{
    console.clear()
    console.log("Server runnning on port:", process.env.PORT)
})
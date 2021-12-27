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




app.listen(process.env.PORT, ()=>{
    console.clear()
    console.log("Server runnning on port:", process.env.PORT)
})
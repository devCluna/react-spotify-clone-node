# Spotify React Client (non official site)
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/TribilinYT/dolla-react-responsive-frontpage-devcluna">
    <img src="/client/src/assets/logos/01_RGB/Spotify_Logo_RGB_Black.png" alt="Logo" width="250" height="80">
  </a>

  <h3 align="center">Spotify React Client (non official site)</h3>

  <p align="center">
    A non official spotify client built with React.js
    <br />
    <a href="https://github.com/TribilinYT/react-spotify-clone-node"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://spotify-client.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/devCluna/react-spotify-clone-node/issues">Report Bug</a>
    ·
    <a href="https://github.com/devCluna/react-spotify-clone-node/issues">Request Feature</a>

  </p>
   
</p>


<!-- TABLE OF CONTENTS -->
<details open="open" >
    <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#description-and-motivation">Description & motivation</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#run-locally">Run local</a></li>
          <ul>
            <li><a href="#client">Run local (client)</a></li>  
            <li><a href="#server">Run local (server)</a></li> 
          </ul>
          <li><a href="#deploy">Deploy</a></li>
          <ul>
            <li><a href="#client-netlify">Deploy Client (Netlify)</a></li>  
            <li><a href="#server-heroku">Deploy Server (Heroku)</a></li> 
          </ul>
      </ul>
    </li>
    <li><a href="#built-with">Built with</a></li>
    <li><a href="#contributions">Contributions</a></li>
    <li><a href="#special-thanks">Special Thanks</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

# About
### Description and motivation



# Getting Started
### Prerequisites
For this repository it is necessary to use the versions:
- [node: 16.13.1](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [npm: 8.3.0](https://github.com/matiassingers/awesome-readme)
- [react: 17.0.2](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

Before deploying this repository, you must request access to the [Spotify API](https://developer.spotify.com/dashboard/login), as a developer.

### Run Locally

Clone repository

```git
git clone https://github.com/devCluna/react-spotify-clone-node 
```
  
#### Client

Change root directory for `/client` and then run `yarn install`
  
```sh
cd client
yarn install
```

Create .env file in root `/client` directory.
 
```sh
REACT_APP_CLIENT_ID = <Your Spotify api id>
REACT_APP_CLIENT_SECRET = <Your Spotify api secret>
REACT_APP_REDIRECT_URI = http://localhost:3000/callback
REACT_APP_SERVER_URL = http://localhost:4000
```

Change root directory for `/client` and run `yarn start`

```sh
yarn install
```

#### Server

Change root directory for `/server` and run `yarn install`

```
cd server
yarn install
```
Create .env file on root `/server` directory.

```sh
CLIENT_ID = <Your Spotify API id>
CLIENT_SECRET = <Your Spotify API secret>
REDIRECT_URI = http://localhost:3000/callback
```
Change root directory for `/server` and run `yarn start`

```
cd server
yarn start
```

### Deploy

#### Client (Netlify)
To deploy this repo in Netlify you can use this [guide](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify) made by [Eli Williamson](https://www.netlify.com/authors/eli-williamson) & [Jason Lengstorf](https://www.netlify.com/authors/jason-lengstorf) for it.
- [Article: A step by steb guide deploying on Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify)

Once published, we must go to the administrator and select respectively: `Site settings> Build & deploy> Evironment`
Then add the following environment variables:

```
REACT_APP_CLIENT_ID = <Your Spotify api id> (String)
REACT_APP_CLIENT_SECRET = <Your Spotify api secret> (String)
REACT_APP_REDIRECT_URI =  <Your Spotify api redirect URI> (URI)
REACT_APP_SERVER_URL = <Your Heroku request URI> (URI)
```
Finally we select the option `Deploys` and `Rebuild` the repo

#### Server (Heroku)
To deploy this repo in Heroku you can use this [guide](https://devcenter.heroku.com/articles/git) provided for Heroku forums
- [Heroku Guide](https://devcenter.heroku.com/articles/git)

Once the repository is uploaded, go to the Settings `Config Vars > Reveal Config Vars` application dashboard and add the following environment variables:
```
CLIENT_ID = <Your Spotify api id> (String)
CLIENT_SECRET = <Your Spotify api secret> (String)
REDIRECT_URI = <Your Netlify URL> (URI)
```
Finally rebuild the repo.

# Built With

- [react](https://es.reactjs.org)
- [spotify-web-api-node](https://www.npmjs.com/package/spotify-web-api-node)
- [react-spotify-web-playback](https://www.npmjs.com/package/react-spotify-web-playback)
- [styled-components](https://www.npmjs.com/package/styled-components)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter)
- [axios](https://www.npmjs.com/package/axios)
- [jest](https://www.npmjs.com/package/jest)
- [express](https://www.npmjs.com/package/express)
- [CORS](https://www.npmjs.com/package/cors)

# Contributions
Contributions, [issues](https://github.com/devCluna/react-spotify-clone-node/issues) and [feature](https://github.com/devCluna/react-spotify-clone-node/issues) requests are welcome. Feel free to check [issues](https://github.com/devCluna/react-spotify-clone-node/issues) page. If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!
1.	Fork the Project
2.	Create your Feature Branch ``git checkout -b feature/YourAmazingFeature``
3.	Commit your Changes ``git commit -m 'Add some Feature'``
4.	Push to the Branch ``git push origin feature/YourAmazingFeature``
5.	Open a Pull Request

# Special Thanks
I want to thank [@bchiang7](https://github.com/bchiang7) for inspiring me to create this version of Spotify, thanks to her [Spotify-profile](https://spotify-profile.herokuapp.com) repository. I was able to take some creative ideas to be included in this repo, and finally acknowledge the work of [@gilbarbara](https://github.com/gilbarbara) with his repo called [react-spotify-web -playback](https://github.com/gilbarbara/react-spotify-web-playback)
Well, with this I was able to add some functionalities such as the player, which saved me a lot of development time. God bless you.

# Author

**Cristhian Luna**
- ***Website:*** [devCluna.com](https://www.devcluna.com)
- ***Github:*** [@devCluna](https://github.com/devCluna)
- ***Twitter:*** [@devCluna](https://twitter.com/DevCLuna)
- ***LinkedIn:*** [Cristhian A. Luna](https://www.linkedin.com/in/devcluna)
- ***Codepen:*** [@DevCluna](https://codepen.io/DevCluna)

# License
**Copyright** © 2021 Cristhian Luna

This Project is [MIT](https://github.com/devCluna/react-spotify-clone-node/blob/master/License) licensed.






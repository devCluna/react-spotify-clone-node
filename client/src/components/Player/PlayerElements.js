import styled from 'styled-components'

export const PlayerContainer = styled.div`
    /* width: 100%;
    height: 20vh; */
    grid-column: 1/3;
    padding-top: 0.7em;
    background-color: #181818;
    order: 3;

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    grid-column: 1/-1;
    grid-row: 2/3;
    order:2
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    
} 
`

export const SpotifyContainer = styled.div`
    
    width: 100%;

`
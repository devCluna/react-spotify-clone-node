import styled from 'styled-components'

export const SectionContainer = styled.div`
    /* width: 100%;
    height: 80vh; */
    grid-column: 2/3;
    background-color:#000;
    padding: 0.5em;
    order: 2;
    position: relative;
    

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    grid-column: 1/2;
    order:1
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    /* width: 78vw; */
    
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    
} 
`
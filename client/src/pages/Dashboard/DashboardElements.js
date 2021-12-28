import styled from 'styled-components'

export const DashboardContainer = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* flex-wrap: wrap; */
     display: grid;
     grid-template-columns: 15vw 85vw;
     grid-template-rows: 85vh 15vh;
    -moz-user-select:none;
    -webkit-user-select:none;
    -webkit-touch-callout:none;
    user-select: none;

    @media only screen and (max-width: 600px) {
    grid-template-columns: 100vw;
    grid-template-rows: 75vh 15vh 10vh;
    }
`
import styled from 'styled-components'
import colors from '../../styles/colors'

export const SuccessStyles = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;

    div.images{
        background-color: ${colors.brand.trakto};
    }

    @media(max-width: 767px){
        grid-template-columns: 1fr;

        div.images{
            display: none;
        }
    }
`
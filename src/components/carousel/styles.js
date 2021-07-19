import styled from 'styled-components'
import colors from '../../styles/colors'

export const CarouselStyles = styled.div`
    background-color: ${colors.brand.trakto};

    @media(max-width: 767px){
        display: none;
    }
`
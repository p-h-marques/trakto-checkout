import styled from 'styled-components'
import colors from '../../styles/colors'

export const CarouselElementStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100%;
        margin-bottom: 40px;
    }

    p {
        color: ${colors.neutral.white};
        font-size: 24px;
        line-height: 25px;
        margin-bottom: 46px;
        font-weight: normal;
        text-align: center;
        max-width: 330px;
    }
`

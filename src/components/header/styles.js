import styled from 'styled-components'
import colors from '../../styles/colors'
import container from '../../styles/container'
import shadows from '../../styles/shadows'

export const HeaderStyles = styled.header`
    background-color: ${colors.brand.trakto};
    padding: 32px 0px 85px;
    display: flex;
    justify-content: center;

    div.container{
        ${container}
        display: flex;
        justify-content: space-between;
    }

    @media(max-width: 991px){
        div.container{
            max-width: 575px;
        }
    }

    div.logo img{
        width: 126px;
    }

    div.support{
        display: flex;
        gap: 8px;
        align-items: center;
        padding: 4px 4px 4px 16px;
        background-color: ${colors.brand.traktoLight};
        border-radius: 500px;
        cursor: pointer;
        box-shadow: ${shadows.md};

        &:hover{
            background-color: ${colors.brand.traktoDark};
        }

        img{
            width: 18px;
        }

        span {
            color: ${colors.background.snow};
            font-size: 14px;
            line-height: 16px;
            font-weight: bold;
        }

        span + img {
            width: 48px;
        }
    }

    @media(max-width: 575px){
        div.support{
            display: none;
        }
    }
`
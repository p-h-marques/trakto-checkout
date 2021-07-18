import styled from 'styled-components'
import colors from '../../styles/colors'

export const ButtonStyles = styled.button`
    border: 0px;
    background-color: ${colors.brand.green};
    padding: 16px;
    color: ${colors.neutral.white};
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background-color: ${colors.brand.greendDark};
    }
`
import styled from 'styled-components'
import colors from '../../styles/colors'

export const PaymentTicketStyles = styled.div`
    a {
        color: ${colors.brand.trakto};
        text-decoration: underline;
        font-size: 12px;
        line-height: 14px;

        &:hover{
            color: ${colors.brand.traktoDark};
        }
    }
`
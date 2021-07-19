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

    label.checkbox{
        display: flex;
        gap: 8px;
        align-items: center;
        padding-left: 8px;
        margin-top: 8px;

        span{
            font-size: 14px;
            line-height: 16px;

            &.error,
            &.error a{
                color: ${colors.brand.orange};
                font-weight: 800;
            }

            a{
                font-size: 14px;
            }
        }
    }
`
import styled from 'styled-components'
import colors from '../../styles/colors'

export const PaymentActionsStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    div.secure{
        display: flex;
        gap: 9px;
        justify-content: center;
        align-items: center;

        img{
            height: 16px;
        }

        span{
            font-size: 12px;
            line-height: 14px;
            color: ${colors.neutral.cloudly};
        }
    }
`
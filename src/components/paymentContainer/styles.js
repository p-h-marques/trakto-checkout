import styled from 'styled-components'
import colors from '../../styles/colors'
import shadows from '../../styles/shadows'

export const PaymentContainerStyles = styled.div`
    background-color: ${colors.neutral.white};
    padding: 24px 24px 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 4px;
    box-shadow: ${shadows.lg};
`
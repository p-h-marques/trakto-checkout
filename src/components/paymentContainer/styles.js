import styled from 'styled-components'
import colors from '../../styles/colors'
import shadows from '../../styles/shadows'

export const PaymentContainerStyles = styled.div`
    background-color: ${colors.neutral.white};
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 4px;
    box-shadow: ${shadows.lg};

    div.border{
        padding-top: 24px;
        border-top: 1px solid ${colors.neutral.light};
        margin-top: 16px;
        width: 100%;
    }

    div.grid{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 16px;

        div.big {
            grid-column: 1/13;
        }

        div.shortl {
            grid-column: 1/5;
        }

        div.shortr {
            grid-column: 9/13;
        }
    }


    @media(max-width: 575px){
        div.shortl {
            grid-column: 1/7;
        }

        div.shortr {
            grid-column: 7/13;
        }
    }
`
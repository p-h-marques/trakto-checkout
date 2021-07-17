import styled from 'styled-components'
// import colors from '../../styles/colors'
// import shadows from '../../styles/shadows'

export const CreditCardStyles = styled.div`
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

    @media(max-width: 575px){
        div.shortl {
            grid-column: 1/7;
        }

        div.shortr {
            grid-column: 7/13;
        }
    }
`
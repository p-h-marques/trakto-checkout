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
            align-self: center;
        }

        div.largel {
            grid-column: 1/11;
            align-self: center;
        }

        div.mediuml{
            grid-column: 1/7;
            align-self: center;
        }

        div.mediumr{
            grid-column: 7/13;
            align-self: center;
        }

        div.shortl {
            grid-column: 1/5;
            align-self: center;
        }

        div.shortm {
            grid-column: 5/9;
            align-self: center;
        }

        div.shortr {
            grid-column: 9/13;
            align-self: center;
        }

        div.smallr{
            grid-column: 11/13;
            align-self: center;
        }
    }

    div.divider{
        grid-column: 1/13;
        border-bottom: 1px solid ${colors.neutral.light};
    }

    @media(max-width: 575px){
        div.grid{
            div.largel {
                grid-column: 1/13;
            }

            div.mediuml, div.mediumr{
                grid-column: 1/13;
            }

            div.shortr, div.shortm {
                grid-column: 7/13;
            }

            div.shortl {
                grid-column: 1/7;
            }

            div.smallr{
                grid-column: 1/13;
            }
        }
    }
`
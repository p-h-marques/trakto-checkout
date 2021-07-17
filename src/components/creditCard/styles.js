import styled from 'styled-components'
import colors from '../../styles/colors'
// import shadows from '../../styles/shadows'

export const CreditCardStyles = styled.div`
    div.input{
        display: flex;
        flex-direction: column;
        gap: 4px;

        &.error{
            label{
                color: ${colors.brand.orange};
            }

            input{
                caret-color: ${colors.brand.orange};
                border-color: ${colors.brand.orange};
            }
        }

        label {
            color: ${colors.brand.trakto};
            font-size: 12px;
            line-height: 14px;
        }

        input {
            border: 1px solid ${colors.neutral.light};
            border-radius: 4px;
            background-color: transparent!important;
            width: 100%;
            font-size: 14px;
            color: ${colors.neutral.darkest};
            padding: 12px 16px;
            caret-color: ${colors.brand.trakto};

            &:focus{
                border-color: ${colors.brand.trakto};
            }
        }
    }
`
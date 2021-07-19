import styled from 'styled-components'
import colors from '../../styles/colors'

export const InputStyles = styled.div`
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

                &:focus{
                    border-color: ${colors.brand.orange};
                }
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
            background: url(${props => props.placeholderImg}) no-repeat scroll 16px 12px;
            padding-left: ${props => props.placeholderImg ? '45px' : '16px'};

            &:focus{
                border-color: ${colors.brand.trakto};
            }
        }

        select {
            border: 1px solid ${colors.neutral.light};
            border-radius: 4px;
            background-color: transparent!important;
            width: 100%;
            font-size: 14px;
            color: ${colors.neutral.darkest};
            padding: 12px 16px;

            &:focus{
                border-color: ${colors.brand.trakto};
            }
        }
`
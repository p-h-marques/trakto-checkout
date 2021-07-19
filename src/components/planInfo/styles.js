import styled from 'styled-components'
import colors from '../../styles/colors'
import shadows from '../../styles/shadows'

export const PlanInfoStyles = styled.div`
    div.ticket{
        background-color: ${colors.neutral.white};
        border-radius: 4px;
        box-shadow: ${shadows.lg};
        padding: 16px 24px 24px;
    }

    div.resume {
        display: flex;
        flex-direction: column;
        gap: 28px;

        div.infos{
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
                line-height: 19px;
                font-weight: 500;
            }

            div{
                padding: 12px 24px;
                background-color: ${colors.neutral.light};
                border-radius: 4px;
                cursor: pointer;

                &:hover{
                    background-color: ${colors.neutral.clear};
                }

                span {
                    font-size: 14px;
                    line-height: 16px;
                    font-weight: 500;
                }
            }

            @media(max-width: 575px){
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 16px;
            }
        }

        div.plan{
            display: flex;
            gap: 16px;

            div.icon{
                display: block;
                width: 53px;
                height: 53px;
                border-radius: 4px;
                background-color: ${colors.neutral.light};
            }

            div.infos{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 4px;
                flex-basis: 0px;
                flex-grow: 1;

                p {
                    font-size: 16px;
                    line-height: 18px;
                    font-weight: 500;
                }

                p + p {
                    font-size: 12px;
                    line-height: 14px;
                    font-weight: normal;
                    color: ${colors.neutral.cloudly};
                }
            }

            div.value{
                font-size: 14px;
                line-height: 16px;
            }
        }
    }

    div.divider{
        margin: 45px 0px 32px;
        border-bottom: 1px dashed ${colors.neutral.clear};
    }

    div.payment{
        display: flex;
        flex-direction: column;
        gap: 22px;

        div.setup{
            display: flex;
            justify-content: space-between;

            select[name=recurrence]{
                border: 0px;
                border-radius: 4px;
                background-color: ${colors.background.silver};
                width: 140px;
                font-size: 14px;
                color: ${colors.neutral.darkest};
                padding: 12px 16px;
            }

            div.value{
                display: flex;
                gap: 3px;
                align-items: center;

                span {
                    font-size: 14px;
                    line-height: 16px;
                    align-self: flex-start;
                }

                span.value{
                    font-size: 32px;
                    line-height: 37px;
                    font-weight: bold;
                }

                span.value + span {
                    align-self: flex-end;
                }
            }

            @media(max-width: 575px){
                flex-direction: column-reverse;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 16px;
            }
        }

        div.terms{
            label{
                display: flex;
                gap: 8px;
                align-items: center;
                padding-left: 8px;
                margin-top: 8px;

                input{

                }

                span{
                    font-size: 14px;
                    line-height: 16px;

                    a {
                        font-size: 14px;
                        color: ${colors.brand.trakto};
                        text-decoration: underline;

                        &:hover{
                            color: ${colors.brand.traktoDark};
                        }
                    }
                }
            }

            div.error{
                border-top: 1px solid ${colors.brand.orange};
                padding-left: 8px;
                margin-top: 24px;
                padding-top: 24px;
                font-size: 14px;
                line-height: 16px;
                font-weight: 800;
                color: ${colors.brand.orange};
            }
        }
    }
`
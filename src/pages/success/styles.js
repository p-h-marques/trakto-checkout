import styled from 'styled-components'
import colors from '../../styles/colors'

export const SuccessStyles = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;

    div.feedback{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;

        div.content{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        img{
            height: 46px;
            margin-bottom: 67px;
        }

        h1{
            margin-bottom: 12px;
            font-size: 48px;
            line-height: 56px;
            font-weight: 700;
        }

        p{
            max-width: 330px;
            font-size: 16px;
            line-height: 19px;
            color: ${colors.neutral.dark};
            opacity: 0.6;
            margin-bottom: 40px;
        }

        a{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            padding: 12px 30px;
            color: ${colors.brand.trakto};
            background-color: rgba(102, 191, 255, 0.16);

            &:hover{
                background-color: rgba(102, 191, 255, 0.3);
            }

            span{
                font-size: 14px;
                line-height: 16px;
            }

            img{
                height: 12px;
                margin-bottom: 0px;
            }
        }
    }

    div.images{
        background-color: ${colors.brand.trakto};
    }


    @media(max-width: 767px){
        grid-template-columns: 1fr;
        div.images{
            display: none;
        }
    }
`
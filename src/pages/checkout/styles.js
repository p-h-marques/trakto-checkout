import styled from 'styled-components'
import container from '../../styles/container'

export const CheckoutStyles = styled.div`
    padding-bottom: 80px;

    main{
        display: flex;
        justify-content: center;
        margin-top: -42px;
    }

    div.container{
        ${container}
    }

    div.grid{
        display: grid;
        grid-template-columns: 7fr 5fr;
        gap: 20px;
    }

    @media(max-width: 991px){
        div.grid{
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }
`
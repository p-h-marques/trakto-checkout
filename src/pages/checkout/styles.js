import styled from 'styled-components'
import container from '../../styles/container'

export const CheckoutStyles = styled.div`
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
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
`
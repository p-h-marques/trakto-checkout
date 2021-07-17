import React from 'react'
import { PaymentContainerStyles } from './styles'

const PaymentContainer = props => {
    return (
        <PaymentContainerStyles>
            {props.children}
        </PaymentContainerStyles>
    )
}

export default PaymentContainer
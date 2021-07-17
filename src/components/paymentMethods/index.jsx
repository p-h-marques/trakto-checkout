import React from 'react'
import { PaymentMethodsStyles } from './styles'
import CreditCard from '../creditCard'
import PaymentTicket from '../paymentTicket'

const PaymentMethods = () => {
    return (
        <PaymentMethodsStyles>
            <CreditCard />
            <PaymentTicket />
        </PaymentMethodsStyles>
    )
}

export default PaymentMethods

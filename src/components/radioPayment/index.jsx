import React from 'react'
import { RadioPaymentStyles } from './styles'

const RadioPayment = ({paymentType, label, onClick, checked}) => {
    return (
        <RadioPaymentStyles
            htmlFor={paymentType}
            onClick={onClick}
        >
            {label}
            <input type="radio" name="paymenttype" id={paymentType}
                checked={checked} onChange={onClick}
            />
            <span></span>
        </RadioPaymentStyles>
    )
}

export default RadioPayment
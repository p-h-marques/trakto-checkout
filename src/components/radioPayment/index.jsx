import React from 'react'
import { RadioPaymentStyles } from './styles'

const RadioPayment = ({paymentType, label, tag, onClick, checked}) => {
    return (
        <RadioPaymentStyles
            htmlFor={paymentType}
            onClick={onClick}
        >
            {label}
            {
                tag !== undefined && (<span className="tag">{tag}</span>)
            }
            <input type="radio" name="paymenttype" id={paymentType}
                checked={checked} onChange={onClick}
            />
            <span className="fake"></span>
        </RadioPaymentStyles>
    )
}

export default RadioPayment
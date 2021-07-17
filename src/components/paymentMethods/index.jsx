import React, {useCallback, useContext} from 'react'
import { PaymentMethodsStyles } from './styles'

import PaymentContainer from '../paymentContainer'
import RadioPayment from '../radioPayment'
import CreditCard from '../creditCard'
import PaymentTicket from '../paymentTicket'

import Context from '../../state/Context'
import * as actions from '../../state/actions'

const PaymentMethods = () => {
    const {state, dispatch} = useContext(Context)

    /**
     * Trocando método de pagamento no
     * objeto de estado global
     */
    const handleChangePaymentType = useCallback(type => {
        if(type !== state.plan.payment)
            dispatch(actions.updatePaymentType(type))
    }, [state.plan.payment])

    return (
        <PaymentMethodsStyles>

            <PaymentContainer>
                <RadioPayment
                    paymentType="creditCard"
                    label="Cartão de Crédito"
                    checked={state.plan.payment === 'creditCard'}
                    onClick={
                        ()=>{handleChangePaymentType('creditCard')}
                    }
                />

                {state.plan.payment === 'creditCard' && (<CreditCard />)}
            </PaymentContainer>

            <PaymentContainer>
                <RadioPayment
                    paymentType="paymentTicket"
                    label="Boleto Bancário"
                    checked={state.plan.payment === 'paymentTicket'}
                    onClick={
                        ()=>{handleChangePaymentType('paymentTicket')}
                    }
                />

                {state.plan.payment === 'paymentTicket' && (<PaymentTicket />)}
            </PaymentContainer>

        </PaymentMethodsStyles>
    )
}

export default PaymentMethods

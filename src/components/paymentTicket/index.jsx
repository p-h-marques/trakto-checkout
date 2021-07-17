import React, {useCallback, useContext} from 'react'
import { PaymentTicketStyles } from './styles'
import Context from '../../state/Context'
import * as actions from '../../state/actions'

const PaymentTicket = () => {
    const paymentType = 'paymentTicket'
    const { state, dispatch } = useContext(Context)

    const handleChangePaymentType = useCallback(type => {
        if(type !== state.plan.payment)
            dispatch(actions.updatePaymentType(type))
    }, [state.plan.payment])

    return (
        <PaymentTicketStyles
            onClick={() =>{ handleChangePaymentType(paymentType) }}
        >
            Boleto  -
            {state.plan.payment === paymentType ? 'ativo' : 'inativo'}
        </PaymentTicketStyles>
    )
}

export default PaymentTicket
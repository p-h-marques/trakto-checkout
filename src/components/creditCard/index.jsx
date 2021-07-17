import React, {useCallback, useContext}  from 'react'
import { CreditCardStyles } from './styles'
import Context from '../../state/Context'
import * as actions from '../../state/actions'

const CreditCard = () => {
    const paymentType = 'creditCard'
    const { state, dispatch } = useContext(Context)

    /**
     * Trocando método de pagamento no
     * objeto de estado global
     */
    const handleChangePaymentType = useCallback(type => {
        if(type !== state.plan.payment)
            dispatch(actions.updatePaymentType(type))
    }, [state.plan.payment])

    return (
        <CreditCardStyles
            onClick={() =>{ handleChangePaymentType(paymentType) }}
        >
            Cartão de Crédito -
            {state.plan.payment === paymentType ? 'ativo' : 'inativo'}
        </CreditCardStyles>
    )
}

export default CreditCard
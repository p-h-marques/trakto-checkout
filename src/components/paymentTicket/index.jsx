import React, {useCallback, useContext} from 'react'
import { PaymentTicketStyles } from './styles'

import Input from '../input'

import Context from '../../state/Context'
import * as actions from '../../state/actions'

const PaymentTicket = () => {
    const { state, dispatch } = useContext(Context)

    /**
     * Atualiza as informações de cadastro do usuário
     */
    const handleUpdateUserInfo = useCallback((type, value) => {
        dispatch(actions.updateUserInfo(type, value))
    }, [state.user])

    return (
        <PaymentTicketStyles className="border grid">
            <div className="big">
                <Input
                    label="Nome Completo"
                    placeholder="Digite seu nome completo"
                    value={state.user.name}
                    onChange={e => {
                        handleUpdateUserInfo('name', e.target.value)
                    }}
                />
            </div>
        </PaymentTicketStyles>
    )
}

export default PaymentTicket
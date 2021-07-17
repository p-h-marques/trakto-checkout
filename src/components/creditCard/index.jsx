import React, { useCallback, useContext } from 'react'
import { CreditCardStyles } from './styles'

import Context from '../../state/Context'
import * as actions from '../../state/actions'

const CreditCard = () => {
    const { state, dispatch } = useContext(Context)

    /**
     * Atualiza as informações de cadastro do usuário
     */
    const handleUpdateUserInfo = useCallback((type, value) => {
        dispatch(actions.updateUserInfo(type, value))
    }, [state.user])

    return (
        <CreditCardStyles className="border">
            <div className="input">
                <label htmlFor="cardName">Nome no Cartão</label>
                <input
                    type="text"
                    name="cardName"
                    id="cardName"
                    placeholder="Digite seu nome completo"
                    value={state.user.name}
                    onChange={e => {
                        handleUpdateUserInfo('name', e.target.value)
                    }}
                />
            </div>
        </CreditCardStyles>
    )
}

export default CreditCard

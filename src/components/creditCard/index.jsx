import React, { useCallback, useContext } from 'react'
import { CreditCardStyles } from './styles'

import Input from '../input'
import ImgCard from '../../assets/images/input/card.svg'

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

    /**
     * Atualiza as informações de cadastro do usuário
     */
    const handleUpdateCardInfo = useCallback((type, value) => {
        dispatch(actions.updateCardInfo(type, value))
    }, [state.creditCard])

    return (
        <CreditCardStyles className="border">
            <div className="big">
                <Input
                    label="Nome no Cartão"
                    placeholder="Digite seu nome completo"
                    value={state.user.name}
                    onChange={e => {
                        handleUpdateUserInfo('name', e.target.value)
                    }}
                />
            </div>

            <div className="big">
                <Input
                    label="Dados do Cartão"
                    placeholder="Número do Cartão"
                    placeholderImg={ImgCard}
                    value={state.creditCard.number}
                    onChange={e => {
                        handleUpdateCardInfo('number', e.target.value)
                    }}
                />
            </div>

            <div className="shortl">
                <Input
                    label="Validade"
                    placeholder="MM/AA"
                    value={state.creditCard.expiration}
                    onChange={e => {
                        handleUpdateCardInfo('expiration', e.target.value)
                    }}
                />
            </div>

            <div className="shortr">
                <Input
                    label="CCV"
                    placeholder="***"
                    value={state.creditCard.securityCode}
                    onChange={e => {
                        handleUpdateCardInfo('securityCode', e.target.value)
                    }}
                />
            </div>
        </CreditCardStyles>
    )
}

export default CreditCard
